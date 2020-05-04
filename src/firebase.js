import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAPfgGovVFha-3I9DV_GcHLBg2krtX3Qlk",
  authDomain: "redux-help-queue-4e632.firebaseapp.com",
  databaseURL: "https://redux-help-queue-4e632.firebaseio.com",
  projectId: "redux-help-queue-4e632",
  storageBucket: "redux-help-queue-4e632.appspot.com",
  messagingSenderId: "705969929143",
  appId: "1:705969929143:web:7634c5c25c091d39b40632"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;