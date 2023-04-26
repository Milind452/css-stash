import {
    collection,
    serverTimestamp,
    addDoc,
    getDocs,
} from "firebase/firestore";
import { db } from "./firebase.config";

async function getCategories() {
    try {
        const querySnapshot = await getDocs(collection(db, "category"));
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
        });
    } catch (err) {
        console.log(err);
    }
}

export { getCategories };
