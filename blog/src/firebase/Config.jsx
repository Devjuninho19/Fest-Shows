import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBMjIqH-K3Fzpd9pU8iHGVfYfikPJsZgBU",
  authDomain: "miniblog-3682c.firebaseapp.com",
  projectId: "miniblog-3682c",
  storageBucket: "miniblog-3682c.appspot.com",
  messagingSenderId: "1089573229943",
  appId: "1:1089573229943:web:90f6048a80f56adeca3d72",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
