import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../Firebase";

export async function SetSubCollectionDoc({
  collectionName,
  userId,
  SubCollection,
  manualID,
  data,
}) {
  try {
    const subColRef = collection(db, collectionName, userId, SubCollection);
    const docRef = doc(subColRef, manualID);

    // Set data
    await setDoc(docRef, data);
  } catch (error) {
    console.error("🔥 Firestore write error:", error);
    return null;
  }
}
