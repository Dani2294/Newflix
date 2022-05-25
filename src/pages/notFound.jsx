import React from "react";
import { Hero, Layout } from "../components";
import NotFoundHero from "../components/hero/NotFoundHero";

function NotFound() {
	return (
		<Layout connexion browse>
			<Hero home>
				<NotFoundHero />
			</Hero>
		</Layout>
	);
}

export default NotFound;
