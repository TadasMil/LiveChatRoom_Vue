import { ref, watchEffect } from "vue";
import { projectFirestore } from "../firebase/config";

const getCollection = (collection) => {
  const error = ref(null);
  const documents = ref(null);

  const collectionRef = projectFirestore.collection(collection);

  const onsub = collectionRef.onSnapshot(
    (snap) => {
      let results = [];
      snap.docs.forEach((doc) => {
        results.push({ ...doc.data() });
      });

      documents.value = results;
    },
    (err) => {
      console.log(err.message);
      documents.value = null;
      error.value = "Serverio problema";
    }
  );

  watchEffect((onInvalidate) => {
    //unsub from prev collection when watcher is stopped(component unmounted)
    onInvalidate(() => onsub());
  });

  return { error, documents };
};

export default getCollection;
