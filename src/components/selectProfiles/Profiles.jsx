import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
	Box,
	Container,
	Picture,
	Spinner,
	Text,
	Title,
} from "./styles/profiles.style";
import { getCurrentUser } from "../../services/firebase/auth";

function Profiles({ handleShowProfiles }) {
	const [showSpinner, setShowSpinner] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	const userData = getCurrentUser();

	useEffect(() => {
		if (userData) {
			setIsLoading(false);
		}
	}, [userData]);

	const handleClick = () => {
		setShowSpinner(true);

		setTimeout(() => {
			setShowSpinner(false);
			handleShowProfiles();
		}, 1000);
	};

	return (
		<Container>
			{showSpinner ? (
				<Spinner />
			) : (
				<>
					<Title>Who's watching ?</Title>
					<Box className="group" onClick={handleClick} title={userData?.name}>
						<Picture
							src={
								isLoading
									? "/assets/images/loading.gif"
									: `/assets/users/${userData?.photoURL}.png`
							}
						/>
						<Text>{userData?.displayName}</Text>
					</Box>
				</>
			)}
		</Container>
	);
}

Profiles.propTypes = {
	handleShowProfiles: PropTypes.func.isRequired,
};

export default Profiles;
