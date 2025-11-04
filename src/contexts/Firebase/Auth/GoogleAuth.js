import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase";
import { SetDataOnAuthId } from "../Firestore/SetDataOnAuthId";

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

    const ISSet = await SetDataOnAuthId({
      collectionName: "loggedUserData",
      documentID: user.email,
      data: userObj,
    });

    if (!ISSet) throw new Error("Failed to save user data to Firestore");

    console.log("✅ Google Login Success:", userObj);

    return { success: true, user: userObj };
  } catch (error) {
    console.error("❌ Google Login Error:", error.message);
    localStorage.setItem("logged", false);
    return { success: false, message: error.message };
  }
};
