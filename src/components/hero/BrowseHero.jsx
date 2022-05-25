import React, { useState } from "react";
import PropTypes from "prop-types";
import {
	BrowseFeature,
	BrowseFeatureButton,
	BrowseFeatureButtons,
	BrowseFeatureText,
	BrowseFeatureTitle,
} from "./styles/hero.style";
import ModalContainer from "../modal";

function BrowseHero({ featureData }) {
	const [showModal, setShowModal] = useState(false);
	const [modalType, setModalType] = useState("");

	const handleModal = (type) => {
		if (type === "trailer") {
			setModalType("trailer");
			setShowModal(true);
		} else if (type === "details") {
			setModalType("details");
			setShowModal(true);
		}
	};

	const featureTitle =
		featureData?.title ||
		featureData?.original_title ||
		featureData?.name ||
		featureData?.original_name;

	return (
		<>
			<BrowseFeature>
				<BrowseFeatureTitle>{featureTitle}</BrowseFeatureTitle>
				<BrowseFeatureText>{featureData?.overview}</BrowseFeatureText>
				<BrowseFeatureButtons>
					<BrowseFeatureButton
						playBtn="true"
						onClick={() => handleModal("trailer")}>
						<img src="/assets/icons/play-button.png" alt="" />
						Trailer
					</BrowseFeatureButton>
					<BrowseFeatureButton onClick={() => handleModal("details")}>
						<img src="/assets/icons/info.png" alt="" />
						See Details
					</BrowseFeatureButton>
				</BrowseFeatureButtons>
			</BrowseFeature>

			{showModal && (
				<ModalContainer
					id={featureData.id}
					type={modalType}
					setShowModal={setShowModal}
				/>
			)}
		</>
	);
}

BrowseHero.propTypes = {
	featureData: PropTypes.object,
};

export default BrowseHero;
