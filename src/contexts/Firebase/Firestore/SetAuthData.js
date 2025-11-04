import { doc, setDoc } from "firebase/firestore";
import { db } from "../Firebase";

export async function SetAuthData({ collectionName, documentID, data }) {
  try {
    if (!collectionName || !documentID || !data) {
      console.error("⚠️ Missing parameters in SetDataOnAuthId");
      return false;
    }

    const docRef = doc(db, "loggedUserData", documentID);

    await setDoc(docRef, data);

    return true;
  } catch (error) {
    console.error("🔥 Firestore error in SetDataOnAuthId:", error);
    return false;
  }
}
