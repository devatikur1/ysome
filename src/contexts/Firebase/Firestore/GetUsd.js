import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
} from "firebase/firestore";
import { db } from "../Firebase";

export async function GetUsd({
  userId,
  SubCollection,
  pageSize = 10,
  lastDoc = null,
}) {
  try {
    // 🔹 Path: collectionName → userId → SubCollection
    const subColRef = collection(db, "usd", userId, SubCollection);

    // 🔹 Query
    let q = query(subColRef, limit(pageSize));

    if (lastDoc) {
      q = query(
        subColRef,
        orderBy("publishedAt", "desc"),
        startAfter(lastDoc),
        limit(pageSize)
      );
    }

    // 🔹 Data fetch
    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      console.warn("⚠️ No more data found in subcollection");
      return [];
    }

    // 🔹 Data map
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return data;
  } catch (error) {
    console.error("🔥 Firestore fetch error in GetUsd:", error);
    return [];
  }
}
