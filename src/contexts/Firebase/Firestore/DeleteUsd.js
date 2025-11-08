import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../Firebase";

export async function DeleteUsd({ userId, subCollection, docId }) {
  try {
    if (!userId || !subCollection || !docId) {
      console.error("⚠️ Missing parameters in DeletesubCollectionDoc");
      return false;
    }
    const docRef = doc(db, "usd", userId, subCollection, docId);

    // delete data
    await deleteDoc(docRef);
    return true;
  } catch (error) {
    console.error("🔥 Firestore delete error:", error);
    return false;
  }
}
