import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase";
import { SetAuthData } from "../Firestore/SetAuthData";

export const GoogleAuth = async () => {
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    const user = result?.user;

    if (!user) throw new Error("User not found after Google sign-in");

    const userObj = {
      name: user.displayName || "Unknown User",
      email: user.email || "No email provided",
      photo: user.photoURL || null,
    };

    const ISSet = await SetAuthData({
      documentID: user.email,
      data: userObj,
    });

    if (!ISSet) throw new Error("Failed to save user data to Firestore");

    return { success: true, user: userObj };
  } catch (error) {
    console.error("❌ Google Login Error:", error.message);
    localStorage.setItem("logged", false);
    return { success: false, message: error.message };
  }
};
