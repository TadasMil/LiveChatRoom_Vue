import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { projectAuth } from "./firebase/config";

import "./assets/global.css";

let app;

//this function is going to fire once the connection is established with firebase, once the
//user is being identified, or there is no user
//we will wait for the user value before we render the app
//With this function we make sure that the firebase has established the connection with the backend
//before mounting our app to the DOM. If the firebase has established the connection.
//We are holding the app before establish the connection
projectAuth.onAuthStateChanged(() => {
  //if app doesnt have a value, then I want to mount the app
  if (!app) {
    app = createApp(App)
      .use(router)
      .mount("#app");
  }
});
