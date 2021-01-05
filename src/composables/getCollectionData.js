import { projectFirestore } from "../firebase/config";

export const getCollectionData = async (collection) => {
  return await projectFirestore.collection(collection);
};
