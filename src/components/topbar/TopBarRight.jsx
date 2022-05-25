import React from "react";
import PropTypes from "prop-types";
import * as ROUTES from "../../constants/routes";
import Button from "../button";
import ProfileMenu from "./ProfileMenu";

function TopBarRight({ connexion }) {
	return (
		<div>{connexion ? <Button to={ROUTES.SIGNIN} /> : <ProfileMenu />}</div>
	);
}

export default TopBarRight;

TopBarRight.propTypes = {
	connexion: PropTypes.bool,
};
