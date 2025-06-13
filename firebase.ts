import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDbHpo-G0zEo0Y6IrnGvT_ALAFAuz4mCPo",
  authDomain: "oneheart-guardians.firebaseapp.com",
  projectId: "oneheart-guardians",
  storageBucket: "oneheart-guardians.appspot.com",
  messagingSenderId: "661686568819",
  appId: "1:661686568819:web:cfb6ebbac4056b0a956706"
};

const app = initializeApp(firebaseConfig);
export default app;
