import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";

export async function GetDataOnCollection({ collectionName }) {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const data = querySnapshot.docs.map((doc) => doc.data());

    return data;
  } catch (error) {
    console.error("🔥 Firestore read error:", error);
    return null;
  }
}
