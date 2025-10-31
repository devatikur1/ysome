import { doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase";

export async function GetDataOnAuthId({ collection, documentID }) {
  try {
    const docSnap = await getDoc(doc(db, collection, documentID));
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return null;
    }
  } catch (error) {
    console.error("🔥 Firestore write error:", error);
    return null;
  }
}
