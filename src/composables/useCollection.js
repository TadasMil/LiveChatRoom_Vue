import { ref } from "vue";
import { projectFirestore } from "../firebase/config";

const useCollection = (collectionName) => {
  const error = ref(null);

  const addDocument = async (document) => {
    error.value = null;

    try {
      await projectFirestore.collection(collectionName).add(document);
    } catch (err) {
      console.log(err.message);
      error.value = "Pranešimas neišsiųstas";
    }
  };

  return { error, addDocument };
};

export default useCollection;
