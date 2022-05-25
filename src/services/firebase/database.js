import { db } from "./firebase.config";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { getCurrentUser } from "./auth";

export function writeUserData(user) {
	// define user ref in the database
	const userRefDB = doc(db, "users/" + user.uid);

	// declare user data object
	const userData = {
		name: user?.displayName,
		email: user?.email,
		photoURL: user?.photoURL,
		uid: user?.uid,
		filmsList: [],
		seriesList: [],
	};

	// write user data to firestore
	setDoc(userRefDB, userData);
}

// get user data from firestore
export async function getUserData() {
	const currUser = getCurrentUser();
	const userDocRef = doc(db, "users/" + currUser?.uid);

	const userDocSnapshot = await getDoc(userDocRef);

	if (userDocSnapshot.exists()) {
		return userDocSnapshot.data();
	}
}

// Add item to user's lists
export async function addToList(page, item) {
	const currUser = getCurrentUser();
	const userDocRef = doc(db, "users/" + currUser?.uid);
	const userDocSnapshot = await getDoc(userDocRef);

	if (page === "films") {
		const currFilmsList = userDocSnapshot?.data()?.filmsList;
		if (currFilmsList) {
			const newFilmsList = [item, ...currFilmsList];
			setDoc(userDocRef, { filmsList: newFilmsList }, { merge: true });
		} else {
			setDoc(userDocRef, { filmsList: [item] }, { merge: true });
		}
	} else if (page === "series") {
		const currSeriesList = userDocSnapshot?.data()?.seriesList;
		if (currSeriesList) {
			const newSeriesList = [item, ...currSeriesList];
			setDoc(userDocRef, { seriesList: newSeriesList }, { merge: true });
		} else {
			setDoc(userDocRef, { seriesList: [item] }, { merge: true });
		}
	}
}

// Remove item from user's lists
export async function removeFromList(page, item) {
	const currUser = getCurrentUser();
	const userDocRef = doc(db, "users/" + currUser?.uid);
	const userDocSnapshot = await getDoc(userDocRef);

	if (page === "films") {
		const currFilmsList = userDocSnapshot?.data()?.filmsList;
		if (currFilmsList) {
			const newFilmsList = currFilmsList.filter((i) => i.id !== item.id);
			updateDoc(userDocRef, { filmsList: newFilmsList });
		}
	} else if (page === "series") {
		const currSeriesList = userDocSnapshot?.data()?.seriesList;
		if (currSeriesList) {
			const newSeriesList = currSeriesList.filter((i) => i.id !== item.id);
			updateDoc(userDocRef, { seriesList: newSeriesList });
		}
	}
}
