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
  subCollection,
  pageSize = 10,
  lastDoc = null,
}) {
  try {
    // 🧠 Validation: userId & subCollection must exist
    if (!userId) throw new Error("❌ Missing userId in GetUsd()");
    if (!subCollection) throw new Error("❌ Missing subCollection in GetUsd()");

    // 🔹 Build collection path dynamically
    const subColRef = collection(db, "usd", userId, subCollection);

    // 🔹 Base query
    let q = query(subColRef, orderBy("uid", "asc"), limit(pageSize));

    // 🔹 Pagination logic (if lastDoc exists)
    if (lastDoc) {
      q = query(
        subColRef,
        orderBy("uid", "asc"),
        startAfter(lastDoc),
        limit(pageSize)
      );
    }

    // 🔹 Fetch data
    const snapshot = await getDocs(q);

    // 🟡 No data found
    if (snapshot.empty) {
      console.warn(`⚠️ No data found in subCollection '${subCollection}'`);
      return [];
    }

    // 🔹 Map documents to array
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
