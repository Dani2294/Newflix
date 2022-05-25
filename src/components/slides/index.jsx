import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container, Row, RowTitle, Wrapper } from "./styles/slides.style";
import Slide from "./Slide";
import MyListSlides from "./MyListSlides";
import ModalContainer from "../modal";

function SlidesContainer({ data }) {
	const [showModal, setShowModal] = useState({ isOpen: false, id: null });
	return (
		<Container>
			{/* My List Slide */}
			<MyListSlides setShowModal={setShowModal} />
			{/* CATEGORY SLIDES */}
			{data.map((item) => (
				<Wrapper key={item.id}>
					<RowTitle>{item.title}</RowTitle>
					<Row>
						{item.slides.map((slide) => (
							<Slide
								key={slide.id}
								slideData={slide}
								setShowModal={setShowModal}
							/>
						))}
					</Row>
				</Wrapper>
			))}
			{showModal.isOpen && (
				<ModalContainer
					id={showModal.id}
					type="details"
					setShowModal={setShowModal}
				/>
			)}
		</Container>
	);
}

SlidesContainer.propTypes = {
	data: PropTypes.array,
};

export default SlidesContainer;
