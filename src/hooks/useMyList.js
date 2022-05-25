import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getCurrentUser } from "../services/firebase/auth";
import { db } from "../services/firebase/firebase.config";

export default function useMyList() {
	const [myList, setMyList] = useState([]);
	const path = useLocation().pathname;

	useEffect(() => {
		// Listen to user's lists changes
		const currUser = getCurrentUser();
		const userDocRef = doc(db, "users/" + currUser?.uid);
		const cleanOnSnapshot = onSnapshot(userDocRef, (docSnapshot) => {
			if (docSnapshot.exists()) {
				const data = docSnapshot.data();

				// Render the user list base on current
				if (path === "/browse/films") {
					setMyList(data?.filmsList);
				} else if (path === "/browse/series") {
					setMyList(data?.seriesList);
				}
			}
		});

		return () => {
			cleanOnSnapshot();
		};
	}, [path]);

	return myList;
}
