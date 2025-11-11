import React, { useEffect, useState } from "react";
import { FirebaseContext } from "./FirebaseContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase";
import { GoogleAuth } from "./Auth/GoogleAuth";
import { GetUsd } from "./Firestore/GetUsd";
import { GetAuthData } from "./Firestore/GetAuthData";
import { SetUsd } from "./Firestore/SetUsd";
import { DeleteUsd } from "./Firestore/DeleteUsd";
import { GetSubCollectionCount } from "./Firestore/GetSubCollectionCount";

export default function FirebaseContextProvider({ children }) {
  // 🔹 Logged state
  const [isLogged, setIsLogged] = useState(
    JSON.parse(localStorage.getItem("logged"))
  );

  // 🔹 User Data
  const [userData, setUserData] = useState({});
  const [countData, setCountData] = useState({});
  const [userID, setUserID] = useState("");

  // 🔹  Like
  const [userAllLikedVdID, setUserAllLikedVdID] = useState([]);
  const [userAllLikedVdData, setUserAllLikedVdData] = useState([]);
  const [userAllLikedVdDatalastVisible, setUserAllLikedVdDatalastVisible] =
    useState({});
  const [LikeLoding, setLikeLoding] = useState(true);

  // 🔹 subscriptions
  const [subscriptionsCID, setSubscriptionsCID] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);
  const [subscriptionslastVisible, setSubscriptionslastVisible] = useState({});
  const [SubLoding, setSubLoding] = useState(true);

  // 🔹 History
  const [historyIDs, setHistoryIDs] = useState([]);
  const [historys, setHistorys] = useState([]);
  const [historylastVisible, setHistorylastVisible] = useState({});
  const [historyLoading, setHistoryLoading] = useState(true);
 
  // ------------------------------------------------
  // ✅ Get Last Visible funtion
  // ------------------------------------------------

  function getLastVisible(data, pageSize = 20) {
    return data?.length === pageSize ? data[data.length - 1] : {};
  }

  useEffect(() => {
    localStorage.setItem("logged", JSON.stringify(isLogged));
  }, [isLogged]);

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

        const sub = await GetSubCollectionCount({
          userId: user.email,
          subCollection: "sub",
        });
        const lik = await GetSubCollectionCount({
          userId: user.email,
          subCollection: "like",
        });
        const his = await GetSubCollectionCount({
          userId: user.email,
          subCollection: "his",
        });

        if (data) {
          setIsLogged(true);
          setUserData(data);
          setCountData(() => ({
            history: Number(his),
            liked: Number(lik),
            subscribe: Number(sub),
          }));
        } else {
          setIsLogged(false);
          setUserData({});
          setCountData({});
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

        const lastVisible = getLastVisible(data, 20);

        setUserAllLikedVdDatalastVisible(lastVisible);
        setUserAllLikedVdData(data);
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

        const lastVisible = getLastVisible(data, 20);
        setSubscriptions(data);
        setSubscriptionslastVisible(lastVisible);
      } catch (error) {
        console.error("🔥 Error fetching user likes:", error);
        setSubscriptions([]);
        setSubscriptionslastVisible({});
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
  // ✅ When Update subscriptions then call this
  // ------------------------------------------------

  useEffect(() => {
    let ids = new Set();
    subscriptions.forEach((dt) => {
      ids.add(dt.id);
    });
    setSubscriptionsCID(Array.from(ids));
  }, [subscriptions]);

  // ------------------------------------------------
  // ✅ When Update historys then call this
  // ------------------------------------------------

  useEffect(() => {
    let ids = new Set();
    historys.forEach((dt) => {
      ids.add(dt.id);
    });
    setHistoryIDs(Array.from(ids));
  }, [historys]);

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

    setCountData((p) => ({
      history: Number(p?.history),
      liked: Number(p?.liked) + 1,
      subscribe: Number(p?.subscribe),
    }));

    setUserAllLikedVdData((p) => [
      {
        ...data,
        id: vdId,
      },
      ...p,
    ]);
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

    setCountData((p) => ({
      history: Number(p?.history),
      liked: Number(p?.liked) - 1,
      subscribe: Number(p?.subscribe),
    }));

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

    setCountData((p) => ({
      history: Number(p?.history),
      liked: Number(p?.liked),
      subscribe: Number(p?.subscribe) + 1,
    }));

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

    setCountData((p) => ({
      history: Number(p?.history),
      liked: Number(p?.liked),
      subscribe: Number(p?.subscribe) - 1,
    }));

    setSubscriptions((prev) => prev.filter((item) => item.id !== cdId));
  }

  // ------------------------
  // ✅ Add History funtion
  // ------------------------

  async function AddHistory({ vdId, Edata }) {
    if (!vdId && !userID) return;

    let data = {
      publishedAt: new Date().toString(),
      data: {
        ...Edata,
      },
    };

    let isAddHis = await SetUsd({
      userId: userID,
      subCollection: "his",
      manualID: vdId,
      data: data,
    });

    if (!isAddHis) return;

    setCountData((p) => ({
      history: Number(p?.history) + 1,
      liked: Number(p?.liked),
      subscribe: Number(p?.subscribe),
    }));

    setHistorys((p) => [{ ...data, id: vdId }, ...p]);
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
      let { success, user, countData } = await GoogleAuth();

      if (success === true) {
        setUserData(user);
        setCountData(countData);
      }
      setIsLogged(success);
    } catch (err) {
      setIsLogged(false);
      setUserData({});
      setCountData({});
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
      countData,
      userID,
      handleGoogleSignIn,
      getLastVisible,
    },
    likes: {
      userAllLikedVdData,
      setUserAllLikedVdData,
      userAllLikedVdID,
      userAllLikedVdDatalastVisible,
      setUserAllLikedVdDatalastVisible,
      AddLike,
      DeleteLike,
      LikeLoding,
      setLikeLoding,
    },
    sub: {
      subscriptions,
      setSubscriptions,
      subscriptionsCID,
      subscriptionslastVisible,
      setSubscriptionslastVisible,
      Subscribe,
      UnSubscribe,
      SubLoding,
      setSubLoding,
    },
    his: {
      historys,
      setHistorys,
      historyIDs,
      historylastVisible,
      setHistorylastVisible,
      AddHistory,
      historyLoading,
      setHistoryLoading,
    },
  };

  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  );
}
