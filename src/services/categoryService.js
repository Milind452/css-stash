import {
    collection,
    serverTimestamp,
    addDoc,
    getDocs,
    deleteDoc,
    doc,
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
    } catch (error) {
        console.log(
            `An error occurred while trying to fetch categories: `,
            error
        );
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
            `An error occurred while trying to add new category ${categoryName}: `,
            error
        );
    }
}

async function deleteCategory(categoryId) {
    try {
        await deleteDoc(doc(db, "category", categoryId));
    } catch (error) {
        console.log(
            `An error occurred while trying to delete category with id ${categoryId}: `,
            error
        );
    }
}

export { getCategories, addCategory, deleteCategory };
