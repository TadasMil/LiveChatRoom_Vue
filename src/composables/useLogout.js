import { ref } from "vue";
import { projectAuth } from "../firebase/config";
import { useUserActiveState } from "./useUserActiveState";

const error = ref(null);

const logout = async (userID) => {
  error.value = null;

  try {
    await projectAuth.signOut();

    await useUserActiveState("users", userID, false);
  } catch (err) {
    console.log(err);
    error.value = err.message;
  }
};

const useLogout = () => {
  return { error, logout };
};

export default useLogout;
