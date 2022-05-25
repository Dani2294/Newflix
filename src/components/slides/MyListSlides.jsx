import React from "react";
import { useMyList } from "../../hooks";
import Slide from "./Slide";
import { Row, RowTitle, Wrapper } from "./styles/slides.style";

function MyListSlides({ setShowModal }) {
	const myList = useMyList();

	return (
		<>
			{myList.length > 0 && (
				<Wrapper>
					<RowTitle>My List</RowTitle>
					<Row>
						{myList.map((slide) => (
							<Slide
								key={slide.id}
								slideData={slide}
								setShowModal={setShowModal}
							/>
						))}
					</Row>
				</Wrapper>
			)}
		</>
	);
}

export default MyListSlides;
