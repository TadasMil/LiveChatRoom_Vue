import { projectFirestore } from "../firebase/config";

export const getUserById = async (collection, userID) => {
  const usersCollection = await projectFirestore.collection(collection);

  return await usersCollection.where("id", "==", userID).get();
};
