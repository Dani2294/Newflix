import React from "react";
import PropTypes from "prop-types";
import {
	CloseBtn,
	CloseWrapper,
	ContentHeader,
	ContentHeaderRecommendation,
	ContentHeaderTitle,
	ContentMeta,
	ContentMetaText,
	ContentOverview,
	ModalButtonImg,
	HeaderButtonList,
	HeaderButtonPlay,
	HeaderButtons,
	ModalContent,
	ModalHeader,
	Wrapper,
} from "./styles/modal.style";
import { addToList, removeFromList } from "../../services/firebase/database";
import { useLocation } from "react-router-dom";
import { useMyList } from "../../hooks";

function DetailsModalWrapper({
	data,
	modalVariant,
	setShowModal,
	setShowPlayer,
	handleToast,
}) {
	const location = useLocation();

	const myList = useMyList();
	const isInList = myList.find((item) => {
		if (item.id === data.id) {
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

	const handleList = (type) => {
		if (type === "add") {
			addToList(page, { ...data });
			handleToast("Added to list", "success");
		} else {
			removeFromList(page, { ...data });
			handleToast("Removed from list", "danger");
		}
	};

	return (
		<Wrapper variants={modalVariant}>
			<CloseWrapper>
				<CloseBtn>
					<ModalButtonImg
						onClick={() => setShowModal(false)}
						src="/assets/icons/add.png"
						alt="close button"
					/>
				</CloseBtn>
			</CloseWrapper>
			<ModalHeader
				src={`https://image.tmdb.org/t/p/original${data?.poster_path}`}>
				<HeaderButtons>
					<HeaderButtonPlay playBtn="true" onClick={() => setShowPlayer(true)}>
						<img src="/assets/icons/play-button.png" alt="" />
						Trailer
					</HeaderButtonPlay>
					{isInList ? (
						<HeaderButtonList onClick={() => handleList("remove")}>
							<ModalButtonImg
								title="remove from my list"
								src="/assets/icons/check.png"
								alt="remove from my list"
							/>
						</HeaderButtonList>
					) : (
						<HeaderButtonList onClick={() => handleList("add")}>
							<ModalButtonImg
								title="add to my list"
								src="/assets/icons/add.png"
								alt="add to my list"
							/>
						</HeaderButtonList>
					)}
				</HeaderButtons>
			</ModalHeader>

			<ModalContent>
				<ContentHeader>
					<ContentHeaderTitle>
						{data?.title ||
							data?.original_title ||
							data?.name ||
							data?.original_name}
					</ContentHeaderTitle>
					<ContentMetaText>{data?.tagline}</ContentMetaText>
					<ContentHeaderRecommendation>
						Recommended at {(Math.ceil(data?.vote_average) * 100) / 10}%
					</ContentHeaderRecommendation>
				</ContentHeader>
				<ContentMeta>
					{data?.seasons && (
						<ContentMetaText>
							Number of season(s) : {data?.seasons.length}
						</ContentMetaText>
					)}
					<ContentMetaText>
						Genres : {data?.genres?.map((genre) => genre.name).join(" | ")}
					</ContentMetaText>
					<ContentMetaText>
						Languages :{" "}
						{data?.spoken_languages
							?.map((lang) => lang.name || lang.english_name)
							.join(" | ")}
					</ContentMetaText>
					<ContentMetaText>
						Production :{" "}
						{data?.production_companies
							?.map((company) => company.name)
							.join(" & ")}
					</ContentMetaText>
					<ContentMetaText>
						Release on : {data?.release_date || data?.first_air_date}
					</ContentMetaText>
				</ContentMeta>
				<ContentOverview>{data?.overview}</ContentOverview>
			</ModalContent>
		</Wrapper>
	);
}

DetailsModalWrapper.propTypes = {
	data: PropTypes.object,
	setShowModal: PropTypes.func,
	setShowPlayer: PropTypes.func,
};

export default DetailsModalWrapper;
