import React from "react";
import { HeroSkeleton, Row, SlideSkeleton } from "./styles/skeleton.styles";

function BrowseSkeleton() {
	const arr = [1, 2, 3, 4, 5];
	return (
		<>
			<HeroSkeleton />

			{arr.map((item) => (
				<Row key={item}>
					{arr.map((slide) => (
						<SlideSkeleton key={slide} />
					))}
				</Row>
			))}
		</>
	);
}

export default BrowseSkeleton;
