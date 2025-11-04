import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../Firebase";

export async function DeleteUsd({ userId, SubCollection, docId }) {
  try {
    if (!userId || !SubCollection || !docId) {
      console.error("⚠️ Missing parameters in DeleteSubCollectionDoc");
      return false;
    }
    const docRef = doc(db, "usd", userId, SubCollection, docId);

    // delete data
    await deleteDoc(docRef);
    return true;
  } catch (error) {
    console.error("🔥 Firestore delete error:", error);
    return false;
  }
}
