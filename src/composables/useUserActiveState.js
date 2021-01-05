import { isAfter } from "date-fns";
import { projectFirestore } from "../firebase/config";
import { getCollectionData } from "./getCollectionData";

export const useUserActiveState = async (collection, userID, isLogging) => {
  try {
    const usersCollection = await getCollectionData(collection);

    const user = await usersCollection.where("id", "==", userID).get();

    user.forEach(async (doc) => {
      await updateUserActiveState(collection, doc.id, isLogging);
    });
  } catch (error) {
    console.log(error);
  }
};

const updateUserActiveState = async (collection, documentID, isLogging) => {
  if (isLogging) {
    return await queryForUpdatingActiveState(collection, documentID, isLogging);
  }

  return await queryForUpdatingActiveState(collection, documentID, isLogging);
};

const queryForUpdatingActiveState = async (
  collection,
  documentID,
  isLogging
) => {
  await projectFirestore
    .collection(collection)
    .doc(documentID)
    .update({ isActive: isLogging });
};
