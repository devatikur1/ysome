import { doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase";

export async function GetAuthData({ documentID }) {
  try {
    const docSnap = await getDoc(doc(db, "loggedUserData", documentID));

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return {};
    }
  } catch (error) {
    console.error("🔥 Firestore write error:", error);
    return {};
  }
}
