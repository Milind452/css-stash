import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB8Rrf4newULxe0hWtZ4HhcZm-L76dk8Lc",
    authDomain: "css-stash-81f46.firebaseapp.com",
    projectId: "css-stash-81f46",
    storageBucket: "css-stash-81f46.appspot.com",
    messagingSenderId: "652649928131",
    appId: "1:652649928131:web:77e4f6f94c5daf63065976",
    measurementId: "G-3TC7NVDQFL",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
