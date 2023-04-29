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
        let categories = [];
        querySnapshot.forEach((doc) => {
            categories.push({ id: doc.id, category: doc.data().name });
        });
        return categories;
    } catch (err) {
        console.log(err);
    }
}

async function addCategory(categoryName) {
    try {
        const docRef = await addDoc(collection(db, "category"), {
            name: categoryName,
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (error) {
        console.log(
            "An error occurred while trying to add new category: ",
            error
        );
    }
}

export { getCategories, addCategory };
