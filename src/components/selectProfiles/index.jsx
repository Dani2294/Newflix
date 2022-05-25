import React from "react";
import PropTypes from "prop-types";
import TopBar from "../topbar";
import Profiles from "./Profiles";

function SelectProfiles({ handleShowProfiles, setStartVideo }) {
	return (
		<>
			<TopBar browse />
			<Profiles
				handleShowProfiles={handleShowProfiles}
				setStartVideo={setStartVideo}
			/>
		</>
	);
}

SelectProfiles.propTypes = {
	handleShowProfiles: PropTypes.func.isRequired,
};

export default SelectProfiles;
