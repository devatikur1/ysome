import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../Firebase";

export async function SetUsd({ userId, subCollection, manualID, data }) {
  if (!subCollection || !manualID) return;
  try {
    const subColRef = collection(db, "usd", userId, subCollection);
    const docRef = doc(subColRef, manualID);

    // Set data
    await setDoc(docRef, data);
    return true;
  } catch (error) {
    console.error("🔥 Firestore write error:", error);
    return false;
  }
}
