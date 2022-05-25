import React from "react";
import { Link as ReactRouterLink, useLocation } from "react-router-dom";
import logo from "../../newflix-logo.png";
import * as ROUTES from "../../constants/routes";
import { LeftGroup, Logo, Menu, MenuItem } from "./styles/topbar.style";

function TopBarLeft() {
	const location = useLocation();

	const activeFilmsLink = location.pathname === "/browse/films" ? true : false;
	const activeSeriesLink =
		location.pathname === "/browse/series" ? true : false;
	return (
		<LeftGroup>
			<ReactRouterLink to={ROUTES.HOME}>
				<Logo src={logo} alt="Newflix logo" />
			</ReactRouterLink>
			{activeFilmsLink || activeSeriesLink ? (
				<Menu>
					<ReactRouterLink to={ROUTES.BROWSE + ROUTES.FILMS}>
						<MenuItem active={activeFilmsLink}>Films</MenuItem>
					</ReactRouterLink>
					<ReactRouterLink to={ROUTES.BROWSE + ROUTES.SERIES}>
						<MenuItem active={activeSeriesLink}>Series</MenuItem>
					</ReactRouterLink>
				</Menu>
			) : null}
		</LeftGroup>
	);
}

export default TopBarLeft;
