import { ref, watchEffect } from "vue";
import { projectFirestore } from "../firebase/config";
import { decryptMessage } from "./encryption";

const getMessagesCollection = (collection) => {
  const error = ref(null);
  const documents = ref(null);

  let collectionRef = projectFirestore
    .collection(collection)
    .orderBy("createdAt");

  const onsub = collectionRef.onSnapshot(
    (snap) => {
      let results = [];
      snap.docs.forEach((doc) => {
        const decryptedMessage = decryptMessage(doc.data().message).toString(
          CryptoJS.enc.Utf8
        );
        const newMessageData = { ...doc.data(), message: decryptedMessage };
        doc.data().createdAt && results.push({ ...newMessageData, id: doc.id });
      });

      documents.value = results;
      error.value = null;
    },
    (err) => {
      console.log(err);
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

export default getMessagesCollection;
