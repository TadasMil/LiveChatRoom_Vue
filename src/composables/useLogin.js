import { ref } from "vue";
import { projectAuth, projectFirestore } from "../firebase/config";
import { useUserActiveState } from "./useUserActiveState";

const error = ref(null);

const login = async (email, password) => {
  error.value = null;

  try {
    const response = await projectAuth.signInWithEmailAndPassword(
      email,
      password
    );

    error.value = null;

    await useUserActiveState("users", response.user.uid, true);

    return response;
  } catch (err) {
    error.value = "Neteisingi vartotojo duomenys";
  }
};

const useLogin = () => {
  return { error, login };
};

export default useLogin;
