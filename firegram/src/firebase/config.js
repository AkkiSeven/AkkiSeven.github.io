import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDDrnWMEU8zJSnXggETZfpQj1VqE2c1SYE",
  authDomain: "chat-90663.firebaseapp.com",
  databaseURL: "https://chat-90663.firebaseio.com",
  projectId: "chat-90663",
  storageBucket: "chat-90663.appspot.com",
  messagingSenderId: "558232865679",
  appId: "1:558232865679:web:a9602ac42deebb696759fa"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage  = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };