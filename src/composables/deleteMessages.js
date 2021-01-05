import { ref, watchEffect } from "vue";
import { projectFirestore } from "../firebase/config";
import { getCollectionData } from "./getCollectionData";

export const deleteMessages = async (collection) => {
  try {
    const collectionRef = await getCollectionData(collection);

    const snap = await collectionRef.get();

    snap.docs.forEach(async (doc) => {
      await collectionRef.doc(doc.id).delete();
    });
  } catch (error) {
    console.log(error);
  }
};
