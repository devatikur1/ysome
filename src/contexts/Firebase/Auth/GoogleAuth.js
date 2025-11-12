import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase";
import { SetAuthData } from "../Firestore/SetAuthData";
import { GetAuthData } from "../Firestore/GetAuthData";
import { generateUsername } from "../../../utils/GenerateUsername";
import { GetSubCollectionCount } from "../Firestore/GetSubCollectionCount";

export const GoogleAuth = async () => {
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    const user = result?.user;
    if (!user) throw new Error("User not found after Google sign-in");

    // ✅ Unique, clean username
    const userName = generateUsername(user.email);

    // ✅ Basic user object
    const userObj = {
      name: user.displayName || "Unknown User",
      email: user.email || "No email provided",
      photo: user.photoURL || null,
      userName,
    };

    // ✅ Fetch user data & count data
    const GetUserData = await GetAuthData({ documentID: user.email });
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

    // ✅ If new user
    if (!GetUserData?.email) {
      const countData = { history: 0, liked: 0, subscribe: 0 };

      const isSetUserData = await SetAuthData({
        documentID: user.email,
        data: userObj,
      });

      if (isSetUserData) {
        localStorage.setItem("logged", JSON.stringify(true));
        return {
          success: true,
          user: { ...userObj },
          countData: { ...countData },
        };
      } else {
        console.error("Failed to set new user data");
      }
    }

    const countData = {
      history: Number(his),
      liked: Number(lik),
      subscribe: Number(sub),
    };
    

    // ✅ If existing user
    localStorage.setItem("logged", JSON.stringify(true));
    return {
      success: true,
      user: { ...userObj },
      countData: { ...countData },
    };
  } catch (error) {
    console.error("❌ Google Login Error:", error.message);
    localStorage.setItem("logged", JSON.stringify(false));
    return { success: false, message: error.message };
  }
};
