import { collection, getCountFromServer } from "firebase/firestore";
import { db } from "../Firebase";

export async function GetSubCollectionCount({ userId, subCollection }) {
  // 🔹 Path: "usd" → userId → subCollection
  const subColRef = collection(db, "usd", userId, subCollection);

  const snap = await getCountFromServer(subColRef);
  return snap.data().count;
}
