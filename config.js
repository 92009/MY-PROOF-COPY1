import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDG1pK6IZy8EiQEDy-wAcNNGoay6kn40Q4",
  authDomain: "school-project-71b8a.firebaseapp.com",
  projectId: "school-project-71b8a",
  storageBucket: "school-project-71b8a.appspot.com",
  messagingSenderId: "79264782047",
  appId: "1:79264782047:web:c2cc030342b8aa5f86bb6a"
};
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}

export default firebase.firestore();