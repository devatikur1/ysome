import { collection, getCountFromServer } from "firebase/firestore";
import { db } from "../Firebase";

export async function GetSubCollectionCount({ userId, subCollection }) {
  try {
    // 🧠 Validate inputs
    if (!userId)
      throw new Error("❌ Missing userId in GetSubCollectionCount()");
    if (!subCollection)
      throw new Error("❌ Missing subCollection in GetSubCollectionCount()");

    // 🔹 Build valid Firestore path
    const subColRef = collection(db, "usd", userId, subCollection);

    // 🔹 Get count from server
    const snap = await getCountFromServer(subColRef);
    return snap.data().count || 0;
  } catch (error) {
    console.error("🔥 Firestore count error:", error.message);
    return 0; // fallback value
  }
}
