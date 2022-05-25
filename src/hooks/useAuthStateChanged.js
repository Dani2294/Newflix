import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebase/firebase.config";

export default function useAuthStateChanged() {
	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem("newflix-authUser"))
	);

	useEffect(() => {
		onAuthStateChanged(auth, (currentUser) => {
			if (currentUser) {
				const { displayName, email, photoURL, uid } = currentUser;
				const userData = {
					displayName,
					email,
					photoURL,
					uid,
				};
				localStorage.setItem("newflix-authUser", JSON.stringify(userData));
				setUser(userData);
			} else {
				localStorage.removeItem("newflix-authUser");
				setUser(null);
			}
		});
	}, []);

	return user;
}
