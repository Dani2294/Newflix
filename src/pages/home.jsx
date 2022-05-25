import React from "react";
import { Accordion, CtaForm, Hero, Jumbotron, Layout } from "../components";
import HomeHero from "../components/hero/HomeHero";

function Home() {
	return (
		<Layout connexion home>
			<Hero home>
				<HomeHero />
			</Hero>
			<main>
				<Jumbotron />
				<Accordion />
				<CtaForm />
			</main>
		</Layout>
	);
}

export default Home;
