import { doc, setDoc } from "firebase/firestore";
import { db } from "../Firebase";

export async function setDataOnAuthId({ collection, documentID, data }) {
  try {
    await setDoc(doc(db, collection, documentID), data, { merge: true });
    console.log("✅ Data successfully written!");
    return true;
  } catch (error) {
    console.error("🔥 Firestore write error:", error);
    return false;
  }
}
