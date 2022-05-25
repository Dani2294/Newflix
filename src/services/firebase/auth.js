import { auth } from "./firebase.config";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
} from "firebase/auth";
import { writeUserData } from "./database";

/* Sign Up */
export async function createNewAccount(name, email, password) {
	let errorMessage = "";

	//function to make first letter uppercase
	const upFirst = (string) => string.charAt(0).toUpperCase() + string.slice(1);

	try {
		const user = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		).then((res) => {
			return res.user;
		});

		// Adding a displayName and the random number for the photoURL
		await updateProfile(user, {
			displayName: upFirst(name),
			photoURL: JSON.stringify(Math.floor(Math.random() * 5) + 1),
		});

		// link user to their firestore data
		writeUserData(user);
	} catch (error) {
		console.log(error.code);

		switch (error.code) {
			case "auth/weak-password":
				errorMessage = "Password should be at least 6 characters";
				break;
			case "auth/email-already-exists":
				errorMessage = "This email adress is already used";
				break;
			case "auth/email-already-in-use":
				errorMessage = "This email adress is already used";
				break;
			case "auth/invalid-email":
				errorMessage = "This email adress is not valid";
				break;
			default:
				errorMessage = error.message;
				break;
		}

		return errorMessage;
	}
}

/* Sign In */
export async function logIn(email, password) {
	let errorMessage = "";

	try {
		await signInWithEmailAndPassword(auth, email, password);
	} catch (error) {
		console.log(error.code);

		switch (error.code) {
			case "auth/user-not-found":
				errorMessage = "This user does not exist";
				break;
			case "auth/wrong-password":
				errorMessage = "Wrong password";
				break;
			case "auth/invalid-email":
				errorMessage = "This email adress is not valid";
				break;
			default:
				errorMessage = error.message;
				break;
		}

		return errorMessage;
	}
}

/* Sign Out */
export function logOut() {
	signOut(auth);
}

/* Get Current User */
export function getCurrentUser() {
	return auth.currentUser;
}
