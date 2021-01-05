import { projectFirestore } from "../firebase/config";
import { getUserById } from "./getUserById";

export const editUserRole = async (collection, userID, role) => {
  try {
    const user = await getUserById(collection, userID);

    user.forEach(async (doc) => {
      await updateUserRole(collection, doc.id, role);
    });
  } catch (error) {
    console.log(error);
  }
};

const updateUserRole = async (collection, documentID, role) => {
  await projectFirestore
    .collection(collection)
    .doc(documentID)
    .update({ role: role });
};
