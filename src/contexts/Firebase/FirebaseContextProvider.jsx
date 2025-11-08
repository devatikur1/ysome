import React, { useEffect, useState } from "react";
import { FirebaseContext } from "./FirebaseContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase";
import { GoogleAuth } from "./Auth/GoogleAuth";
import { GetUsd } from "./Firestore/GetUsd";
import { GetAuthData } from "./Firestore/GetAuthData";
import { SetUsd } from "./Firestore/SetUsd";
import { DeleteUsd } from "./Firestore/DeleteUsd";

export default function FirebaseContextProvider({ children }) {
  // 🔹 Logged state
  const [isLogged, setIsLogged] = useState(
    localStorage.getItem("logged") === "true"
  );

  // 🔹 User Data
  const [userData, setUserData] = useState({});
  const [userID, setUserID] = useState("");

  // 🔹  Like
  const [userAllLikedVdID, setUserAllLikedVdID] = useState([]);
  const [userAllLikedVdData, setUserAllLikedVdData] = useState([]);
  const [userAllLikedVdDatalastVisible, setUserAllLikedVdDatalastVisible] =
    useState({});
  const [LikeLoding, setLikeLoding] = useState(false);

  // 🔹 subscriptions
  const [subscriptionsCID, setSubscriptionsCID] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);
  const [subscriptionslastVisible, setSubscriptionslastVisible] = useState({});
  const [SubLoding, setSubLoding] = useState(false);
  const [SubError, setSubError] = useState(false);

  // ------------------------------------------------
  // ✅ Get Last Visible funtion
  // ------------------------------------------------

  function getLastVisible(data, pageSize = 20) {
    return data?.length === pageSize ? data[data.length - 1] : {};
  }

  // ---------------------------------------
  // ✅ useEffect get all Data auth changes
  // ---------------------------------------

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setIsLogged(false);
        return;
      }
      setUserID(user.email);
      setSubLoding(true);
      setLikeLoding(true);

      // 🔹 1️⃣ Get logged-user main data
      try {
        const data = await GetAuthData({
          documentID: user.email,
        });

        if (data) {
          setIsLogged(true);
          setUserData(data);
        } else {
          setIsLogged(false);
          setUserData({});
        }
      } catch (error) {
        console.error("🔥 Error fetching user data:", error);
        setIsLogged(false);
        setUserData({});
      } finally {
        setLikeLoding(false);
      }

      // 🔹 2️⃣ Get user likes (subCollection)
      try {
        const data = await GetUsd({
          userId: user.email,
          subCollection: "like",
          pageSize: 20,
          lastDoc: null,
        });
        console.log(data);
        if (!data || (Array.isArray(data) && data.length === 0)) {
          setUserAllLikedVdDatalastVisible({});
          setUserAllLikedVdData([]);
        } else {
          const lastVisible = getLastVisible(data, 20);

          setUserAllLikedVdDatalastVisible(lastVisible);
          setUserAllLikedVdData(data);
        }
      } catch (error) {
        console.error("🔥 Error fetching user likes:", error);
        setUserAllLikedVdDatalastVisible({});
        setUserAllLikedVdData([]);
      }

      // 🔹 2️⃣ Get user Subscribe (subCollection)
      try {
        const data = await GetUsd({
          userId: user.email,
          subCollection: "sub",
          pageSize: 20,
          lastDoc: null,
        });
        if (!data || (Array.isArray(data) && data.length === 0)) {
          setSubscriptions([]);
          setSubscriptionslastVisible({});
          setSubError(true);
        } else {
          const lastVisible = getLastVisible(data, 20);
          setSubscriptions(data);
          setSubscriptionslastVisible(lastVisible);
          setSubError(false);
        }
      } catch (error) {
        console.error("🔥 Error fetching user likes:", error);
        setSubscriptions([]);
        setSubscriptionslastVisible({});
        setSubError(true);
      } finally {
        setSubLoding(false);
      }
    });

    return () => unsubscribe();
  }, []);

  // ------------------------------------------------
  // ✅ When Update userAllLikedVdData then call this
  // ------------------------------------------------

  useEffect(() => {
    let ids = new Set();
    userAllLikedVdData.forEach((dt) => {
      ids.add(dt.data.id);
    });
    setUserAllLikedVdID(Array.from(ids));
  }, [userAllLikedVdData]);

  // ------------------------------------------------
  // ✅ When Update userAllLikedVdData then call this
  // ------------------------------------------------

  useEffect(() => {
    let ids = new Set();
    subscriptions.forEach((dt) => {
      ids.add(dt.id);
    });
    setSubscriptionsCID(Array.from(ids));
  }, [subscriptions]);

  // --------------------
  // ✅ AddLike funtion
  // --------------------

  async function AddLike({ vdId, Edata }) {
    if (!vdId && !userID) return;

    let data = {
      publishedAt: new Date().toString(),
      data: {
        ...Edata,
      },
    };

    let IsLike = await SetUsd({
      userId: userID,
      subCollection: "like",
      manualID: vdId,
      data: data,
    });

    if (!IsLike) return;

    setUserAllLikedVdData((p) => [data, ...p]);
  }

  // ----------------------
  // ✅ deleteLike funtion
  // ----------------------

  async function DeleteLike({ vdId }) {
    if (!vdId || !userID) return;

    const isDeleted = await DeleteUsd({
      userId: userID,
      subCollection: "like",
      docId: vdId,
    });

    if (!isDeleted) return;

    setUserAllLikedVdData((prev) => prev.filter((item) => item.id !== vdId));
  }

  // ------------------------
  // ✅ Subscribe funtion
  // ------------------------

  async function Subscribe({ cdId, ChannelData }) {
    if (!cdId && !userID && !ChannelData) return;
    console.log(ChannelData);

    let data = {
      publishedAt: new Date().toString(),
      data: {
        ...ChannelData,
      },
    };

    let sub = await SetUsd({
      userId: userID,
      subCollection: "sub",
      manualID: cdId,
      data: data,
    });

    if (!sub) return;

    setSubscriptions((p) => [
      {
        id: cdId,
        ...data,
      },
      ...p,
    ]);
  }

  // ------------------------
  // ✅ UnSubscribe funtion
  // ------------------------

  async function UnSubscribe({ cdId }) {
    if (!cdId || !userID) return;

    const isDeleted = await DeleteUsd({
      userId: userID,
      subCollection: "sub",
      docId: cdId,
    });

    if (!isDeleted) return;

    setSubscriptions((prev) => prev.filter((item) => item.id !== cdId));
  }

  // ------------------------
  // ✅ Temp
  // ------------------------

  useEffect(() => {
    console.log(subscriptions);
    console.log(userAllLikedVdData);
  }, [subscriptions, userAllLikedVdData]);

  // ------------------------
  // ✅ Handle Google Sign-In
  // ------------------------

  const handleGoogleSignIn = async ({ setGoogleIsDis, googleIsDis }) => {
    if (googleIsDis) return;
    setGoogleIsDis(true);
    try {
      let { success, user } = await GoogleAuth();
      if (success === true) {
        setUserData(user);
      }
      setIsLogged(success);
    } catch (err) {
      console.error(err);
    } finally {
      setGoogleIsDis(false);
    }
  };

  // ✅ Context value
  const value = {
    auth: {
      isLogged,
      userData,
      userID,
      handleGoogleSignIn,
      getLastVisible,
    },
    likes: {
      userAllLikedVdData,
      userAllLikedVdID,
      userAllLikedVdDatalastVisible,
      AddLike,
      DeleteLike,
      LikeLoding,
    },
    sub: {
      subscriptions,
      setSubscriptions,
      subscriptionsCID,
      setSubscriptionsCID,
      subscriptionslastVisible,
      setSubscriptionslastVisible,
      Subscribe,
      UnSubscribe,
      SubLoding,
      setSubLoding,
      SubError,
    },
  };

  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  );
}
