import { ref } from "vue";
import { projectAuth } from "../firebase/config";

//when the application first loads, if their logged in then it will be
//the value, if their not logged it, user will be null
const user = ref(projectAuth.currentUser);

//onAuthStateChanged always tracks the state of the user auth, if the user logges in
//this function will fire, if the user logges out the function will fire
//This function identifies the user, if no user it returns NULL
// _user is the incoming user
projectAuth.onAuthStateChanged((_user) => {
  user.value = _user;
});

const getUser = () => {
  return { user };
};

export default getUser;
