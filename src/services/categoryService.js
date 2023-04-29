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
        console.log(querySnapshot);
        let categories = [];
        querySnapshot.forEach((doc) => {
            categories.push({ id: doc.id, category: doc.data().name });
        });
        return categories;
    } catch (err) {
        console.log(err);
    }
}

export { getCategories };
