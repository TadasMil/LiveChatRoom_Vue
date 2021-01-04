import { ref } from "vue";
import {
  firebaseAnalytics,
  projectAuth,
  projectFirestore,
} from "../firebase/config";

const error = ref(null);

const signup = async (email, password, name) => {
  error.value = null;

  try {
    const response = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    if (!response) {
      throw new Error("Registracija nepavyko");
    }
    await response.user.updateProfile({ displayName: name });
    console.log(response);

    return response;
  } catch (err) {
    error.value = err.message;
  }
};

const useSignup = () => {
  return { error, signup };
};

export default useSignup;
