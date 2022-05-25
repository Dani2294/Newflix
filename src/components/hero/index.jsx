import React from "react";
import PropTypes from "prop-types";
import { Container } from "./styles/hero.style";

function Hero({ home, children, ...props }) {
	const homeClass = home ? "home-bottom-border " : "";
	return (
		<Container className={homeClass} {...props}>
			{children}
		</Container>
	);
}

Hero.propTypes = {
	home: PropTypes.bool,
};

export default Hero;
