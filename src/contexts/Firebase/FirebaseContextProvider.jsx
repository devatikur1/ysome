import React, { useEffect, useState } from "react";
import { FirebaseContext } from "./FirebaseContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase";
import { GetDataOnDoc } from "./Firestore/GetDataOnDoc";

export default function FirebaseContextProvider({ children }) {
  // 🔹 Logged state
  const [isLogged, setIsLogged] = useState(
    localStorage.getItem("logged") === "true"
  );
  const [updateLoggedStatus, setUpdateLoggedStatus] = useState(0);

  // 🔹 User Data
  const [userData, setUserData] = useState({});

  // 🔹 subscriptions
  const [subscriptions, setSubscriptions] = useState([]);

  // ✅ Sync logged status with localStorage
  useEffect(() => {
    setIsLogged(localStorage.getItem("logged") === "true");
  }, [updateLoggedStatus]);

  // ✅ Listen for auth changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      const isLocalLogged = localStorage.getItem("logged") === "true";

      if (user && isLocalLogged) {
        try {
          const data = await GetDataOnDoc({
            collection: "loggedUserData",
            documentID: user.uid,
          });

          if (!data) {
            setIsLogged(false);
            setUserData({});
          } else {
            setIsLogged(true);
            setUserData(data);
          }
        } catch (error) {
          console.error("🔥 Error fetching user data:", error);
          setUserData({});
          setIsLogged(false);
        }

        try {
          const data = await GetDataOnDoc({
            collection: "subscriptions",
            documentID: user.uid,
          });
          console.log(data);

          if (!data) {
            setSubscriptions([]);
          } else {
            setSubscriptions(data);
          }
        } catch (error) {
          console.error("🔥 Error fetching user data:", error);
          setUserData({});
          setIsLogged(false);
        }
      } else {
        setUserData({});
        setIsLogged(false);
      }
    });

    return () => unsubscribe();
  }, []);

  // ✅ Context value
  const value = {
    isLogged,
    setUpdateLoggedStatus,
    userData,
    subscriptions,
  };

  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  );
}
