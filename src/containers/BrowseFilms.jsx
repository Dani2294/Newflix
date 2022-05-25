import React, { useEffect, useState } from "react";
import { Hero, SlidesContainer } from "../components";
import BrowseHero from "../components/hero/BrowseHero";
import BrowseSkeleton from "../components/skeleton/BrowseSkeleton";

import { useContent } from "../hooks";

function BrowseFilms() {
	const [content, setContent] = useState([]);
	const [featureContent, setFeatureContent] = useState(null);

	const data = useContent("films");

	useEffect(() => {
		const getContent = () => {
			const feature = data[0]?.slides[0];
			setContent(data);
			setFeatureContent(feature);
		};
		getContent();
	}, [data]);

	/* useEffect(() => {
		let arr = [];
		data.forEach((item) => {
			const flatArray = [].concat(...item.slides);
			arr = [...arr, ...flatArray];
		});
		console.log(arr);
	}, [data]); */

	return (
		<>
			{content.length < 4 ? (
				<BrowseSkeleton />
			) : (
				<>
					<Hero
						src={`https://image.tmdb.org/t/p/original${featureContent?.poster_path}`}>
						<BrowseHero featureData={featureContent} />
					</Hero>
					<SlidesContainer data={content} />
				</>
			)}
		</>
	);
}

export default BrowseFilms;
