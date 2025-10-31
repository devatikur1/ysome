import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase";
import { addImageInStorage } from "../../../utils/addImageInStorage";
import { setDataOnAuthId } from "../Firestore/SetDataOnAuthId";

export const GoogleAuth = async () => {
  const provider = new GoogleAuthProvider();

  try {
    // Google sign-in popup
    const result = await signInWithPopup(auth, provider);
    const user = result?.user;

    if (!user) throw new Error("User not found after Google sign-in");

    // handle image upload / validation
    const getValidUrl = user?.photoURL
      ? await addImageInStorage(user.photoURL)
      : null;

    // Create structured user object
    const userObj = {
      id: user.uid,
      name: user.displayName || "Unknown User",
      email: user.email || "No email provided",
      photo: getValidUrl,
    };

    let ISSet = await setDataOnAuthId({
      collection: "loggedUserData",
      documentID: user.uid,
      data: userObj,
    });

    if (ISSet === false) return;

    console.log("✅ Google Login Success:", userObj);

    // Save to localStorage
    localStorage.setItem("logged", "true");
    localStorage.setItem("user", JSON.stringify(userObj));
  } catch (error) {
    console.error("❌ Google Login Error:", error.message);
    localStorage.setItem("logged", "false");
    return null;
  }
};
