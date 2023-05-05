import {
    collection,
    serverTimestamp,
    addDoc,
    getDocs,
    deleteDoc,
    doc,
} from "firebase/firestore";
import { db } from "./firebase.config";

async function getCodes(categoryName) {
    try {
        const querySnapshot = await getDocs(collection(db, "code"));
        let codes = [];
        querySnapshot.forEach((doc) => {
            codes.push({
                id: doc.id,
                category: doc.data().category,
                name: doc.data().name,
                html: doc.data().html,
                css: doc.data().css,
                js: doc.data().js,
                modifiedAt: doc.data().modifiedAt,
            });
        });
        codes = codes.filter((code) => code.category === categoryName);
        return codes;
    } catch (error) {
        console.log(`An error occurred while trying to fetch codes: `, error);
    }
}

async function addCode(categoryName, codeName, html, css, js) {
    try {
        const docRef = await addDoc(collection(db, "code"), {
            category: categoryName,
            name: codeName,
            html: html,
            css: css,
            js: js,
            modifiedAt: serverTimestamp(),
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (error) {
        console.log(
            `An error occurred while trying to add new code ${codeName} in category ${categoryName}: `,
            error
        );
    }
}

async function deleteCode(codeId) {
    try {
        await deleteDoc(doc(db, "code", codeId));
    } catch (error) {
        console.log(
            `An error occurred while trying to delete code with id ${codeId}: `,
            error
        );
    }
}

export { getCodes, addCode, deleteCode };
