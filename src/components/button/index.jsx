import React from "react";
import PropTypes from "prop-types";
import { Link as ReactRouterLink } from "react-router-dom";
import { Btn } from "./styles/button.style";

function Button({ to, isForm, ...props }) {
	return (
		<ReactRouterLink to={to}>
			<Btn {...props}>Sign In</Btn>
		</ReactRouterLink>
	);
}

export default Button;

Button.propTypes = {
	to: PropTypes.string,
	isForm: PropTypes.bool,
};
