import React from "react";
import CtaForm from "../cta-form";
import {
	HomeHeroContainer,
	HomeSubtitle,
	HomeTitle,
} from "./styles/hero.style";

function HomeHero() {
	return (
		<HomeHeroContainer>
			<HomeTitle>Unlimited movies, TV shows, and more.</HomeTitle>
			<HomeSubtitle>Watch anywhere. Cancel anytime.</HomeSubtitle>
			<CtaForm />
		</HomeHeroContainer>
	);
}

export default HomeHero;
