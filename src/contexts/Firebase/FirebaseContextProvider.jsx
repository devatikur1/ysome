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
  const [isLogged, setIsLogged] = useState(false);

  // 🔹 User Data
  const [userData, setUserData] = useState({});
  const [userID, setUserID] = useState("");

  // 🔹  Like
  const [userAllLikedVdID, setUserAllLikedVdID] = useState([]);
  const [userAllLikedVdData, setUserAllLikedVdData] = useState([]);
  const [userAllLikedVdDatalastVisible, setUserAllLikedVdDatalastVisible] =
    useState({});

  // 🔹 subscriptions
  const [subscriptions, setSubscriptions] = useState([]);
  const [subscriptionsCID, setSubscriptionsCID] = useState([]);
  const [subscriptionslastVisible, setSubscriptionslastVisible] = useState({});

  // ---------------------------------------
  // ✅ useEffect get all Data auth changes
  // ---------------------------------------
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) return;
      setUserID(user.email);

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
      }

      // 🔹 2️⃣ Get user likes (subcollection)
      try {
        const { data, lastVisible } = await GetUsd({
          userId: user.email,
          SubCollection: "like",
          pageSize: 20,
          lastDoc: null,
        });
        setUserAllLikedVdDatalastVisible(lastVisible);
        setUserAllLikedVdData(data);
      } catch (error) {
        console.error("🔥 Error fetching user likes:", error);
        setUserAllLikedVdDatalastVisible({});
        setUserAllLikedVdData([]);
      }

      // 🔹 2️⃣ Get user Subscribe (subcollection)
      try {
        const { data, lastVisible } = await GetUsd({
          userId: user.email,
          SubCollection: "sub",
          pageSize: 20,
          lastDoc: null,
        });
        setSubscriptionslastVisible(lastVisible);
        setSubscriptions(data);
      } catch (error) {
        console.error("🔥 Error fetching user likes:", error);
        setSubscriptions([]);
        setSubscriptionslastVisible({});
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
      ids.add(dt.id);
    });
    setUserAllLikedVdID(Array.from(ids));
  }, [userAllLikedVdData]);

  // ------------------------------------------------
  // ✅ AddLike funtion
  // ------------------------------------------------

  async function AddLike({ vdId, Edata }) {
    if (!vdId && !userID) return;

    let IsLike = await SetUsd({
      userId: userID,
      SubCollection: "like",
      manualID: vdId,
      data: Edata,
    });

    if (!IsLike) return;

    setUserAllLikedVdData((p) => [
      {
        id: vdId,
        ...Edata,
      },
      ...p,
    ]);
  }

  // ------------------------------------------------
  // ✅ deleteLike funtion
  // ------------------------------------------------

  async function DeleteLike({ vdId }) {
    if (!vdId || !userID) return;

    const isDeleted = await DeleteUsd({
      userId: userID,
      SubCollection: "sub",
      docId: vdId,
    });

    if (!isDeleted) return;

    setUserAllLikedVdData((prev) => prev.filter((item) => item.id !== vdId));
  }

  // ------------------------
  // ✅ Subscribe funtion
  // ------------------------

  async function Subscribe({ cdId }) {
    if (!cdId && !userID) return;

    let data = {
      publishedAt: new Date().toString(),
    };

    let IsLike = await SetUsd({
      userId: userID,
      SubCollection: "sub",
      manualID: cdId,
      data: data,
    });

    if (!IsLike) return;

    setUserAllLikedVdData((p) => [
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
      SubCollection: "sub",
      docId: cdId,
    });

    if (!isDeleted) return;

    setUserAllLikedVdData((prev) => prev.filter((item) => item.id !== cdId));
  }

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
    isLogged,
    userData,
    subscriptions,
    AddLike,
    DeleteLike,
    userAllLikedVdID,
    userAllLikedVdData,
    handleGoogleSignIn,
    Subscribe,
    UnSubscribe,
  };

  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  );
}
