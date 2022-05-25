import React from "react";
import PropTypes from "prop-types";
import TopBar from "../topbar";
import Profiles from "./Profiles";

function SelectProfiles({ handleShowProfiles }) {
	return (
		<>
			<TopBar browse />
			<Profiles handleShowProfiles={handleShowProfiles} />
		</>
	);
}

SelectProfiles.propTypes = {
	handleShowProfiles: PropTypes.func.isRequired,
};

export default SelectProfiles;
