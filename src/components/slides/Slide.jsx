import React, { useContext } from "react";
import PropTypes from "prop-types";
import {
	Card,
	CardImage,
	Meta,
	MetaButton,
	MetaButtonImage,
	MetaButtons,
	MetaDescription,
	MetaHeader,
	MetaRecommendation,
	MetaTitle,
} from "./styles/slides.style";
import { addToList, removeFromList } from "../../services/firebase/database";
import { useLocation } from "react-router-dom";
import { useMyList } from "../../hooks";
import ToastContext from "../../context/toast-context";

function Slide({ slideData, setShowModal }) {
	const { setToast } = useContext(ToastContext);
	const location = useLocation();

	const myList = useMyList();

	const isInList = myList.find((item) => {
		if (item.id === slideData.id) {
			return true;
		}
		return false;
	});

	// Get the current pathname
	const page =
		location.pathname === "/browse/films"
			? "films"
			: location.pathname === "/browse/series"
			? "series"
			: "";

	const slideTitle =
		slideData.title ||
		slideData.original_title ||
		slideData.name ||
		slideData.original_name;

	const handleList = (message, type) => {
		if (type === "add") {
			addToList(page, { ...slideData });
			setToast({ message, type: "success" });
		} else {
			removeFromList(page, { ...slideData });
			setToast({ message, type: "danger" });
		}
		setTimeout(() => {
			setToast(null);
		}, 3000);
	};

	// function to truncate a text
	const truncateText = (text) => {
		return text.substring(0, 100) + (text.length > 100 ? "..." : "");
	};

	const cardVariants = {
		hidden: { opacity: 0, x: -400 },
		visible: { opacity: 1, x: 0, transition: { duration: 0.35 } },
	};

	return (
		<>
			<Card variants={cardVariants} initial="hidden" animate="visible">
				<CardImage
					src={`https://image.tmdb.org/t/p/w300${
						slideData.poster_path || slideData.backdrop_path
					}`}
					alt={slideTitle}
				/>
				<Meta>
					<MetaHeader>
						<MetaTitle>{slideTitle}</MetaTitle>
						<MetaButtons>
							{isInList ? (
								<MetaButton
									onClick={() => handleList("Removed from list", "remove")}>
									<MetaButtonImage
										title="remove from my list"
										src="/assets/icons/check.png"
										alt="remove from my list"
									/>
								</MetaButton>
							) : (
								<MetaButton onClick={() => handleList("Added to list", "add")}>
									<MetaButtonImage
										title="add to my list"
										src="/assets/icons/add.png"
										alt="add to my list"
									/>
								</MetaButton>
							)}

							<MetaButton
								onClick={() => setShowModal({ isOpen: true, id: slideData.id })}
								title="see more details">
								<MetaButtonImage
									src="/assets/icons/chevron-right.png"
									alt="see more"
									rotate="90deg"
								/>
							</MetaButton>
						</MetaButtons>
					</MetaHeader>
					<MetaDescription>{truncateText(slideData.overview)}</MetaDescription>
					<MetaRecommendation>
						Recommended at {(Math.ceil(slideData.vote_average) * 100) / 10}%
					</MetaRecommendation>
				</Meta>
			</Card>
		</>
	);
}

Slide.propTypes = {
	slideData: PropTypes.object.isRequired,
};

export default Slide;
