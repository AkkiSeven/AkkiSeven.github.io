import firebase from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAzffX1eNKfG7orlNrYOqSByknJAAIKJPU",
  authDomain: "auth-development-30edd.firebaseapp.com",
  projectId: "auth-development-30edd",
  storageBucket: "auth-development-30edd.appspot.com",
  messagingSenderId: "673945934522",
  appId: "1:673945934522:web:205a49f67d7bce7e7bc083"
};

const app = firebase.initializeApp({
  apiKey: firebaseConfig.apiKey,
  authDomain: firebaseConfig.authDomain,
  projectId: firebaseConfig.projectId,
  storageBucket: firebaseConfig.storageBucket,
  messagingSenderId: firebaseConfig.messagingSenderId,
  appId: firebaseConfig.appId
});

export const auth = app.auth()
export default app