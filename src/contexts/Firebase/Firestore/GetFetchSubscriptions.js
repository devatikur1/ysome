import { collection, getDocs, limit, orderBy, query, startAfter } from "firebase/firestore";
import { db } from "../Firebase";

export async function GetFetchSubscriptions({
  collectionName,
  userId,
  SubCollection,
  pageSize,
  lastDoc,
  nextPage,
}) {
  try {
    const docSnap = collection(db, collectionName, userId, SubCollection);
    let q;
    q = query(docSnap, orderBy("publishedAt", "desc"), limit(pageSize));

    if (nextPage) {
      q = query(
        docSnap,
        orderBy("publishedAt", "desc"),
        startAfter(lastDoc),
        limit(pageSize)
      );
    }

    // Fetch data
    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((doc) => doc.data());
    const ids = data.filter((dt) => dt.id);
    return { data: data, id: ids, RastDoc: data[this.length - 1] };
  } catch (error) {
    console.error("🔥 Firestore write error:", error);
    return null;
  }
}
