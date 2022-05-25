import React from "react";
import PropTypes from "prop-types";
import TopBarWrapper from "./TopBarWrapper";
import TopBarLeft from "./TopBarLeft";
import TopBarRight from "./TopBarRight";

function TopBar({ connexion = false, browse = false }) {
	return (
		<TopBarWrapper>
			<TopBarLeft browse={browse} />

			{connexion || browse ? <TopBarRight connexion={connexion} /> : null}
		</TopBarWrapper>
	);
}

export default TopBar;

TopBar.propTypes = {
	connexion: PropTypes.bool,
	browse: PropTypes.bool,
};
