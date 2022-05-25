import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import {
	NotFoundHeroButton,
	NotFoundHeroContainer,
	NotFoundHeroImg,
	NotFoundHeroTitle,
} from "./styles/hero.style";

function NotFoundHero() {
	return (
		<NotFoundHeroContainer>
			<NotFoundHeroTitle>What the f*ck am i doing here !?</NotFoundHeroTitle>
			<NotFoundHeroImg
				src="/assets/videos/pulp-fiction.gif"
				alt="pulp fiction"
			/>
			<ReactRouterLink to={ROUTES.HOME}>
				<NotFoundHeroButton>Go back to home page</NotFoundHeroButton>
			</ReactRouterLink>
		</NotFoundHeroContainer>
	);
}

export default NotFoundHero;
