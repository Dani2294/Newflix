import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import PlayerModalWrapper from "./PlayerModalWrapper";

function PlayerModal({ setShowPlayer, videosData }) {
	const [videoId, setVideoId] = useState({ site: "", key: "" });

	useEffect(() => {
		const trailer = videosData?.filter((vid) => vid.type === "Trailer")[0];
		if (trailer) setVideoId({ site: trailer.site, key: trailer.key });
	}, [videosData]);
	return <PlayerModalWrapper setShowPlayer={setShowPlayer} videoId={videoId} />;
}

PlayerModal.propTypes = {
	setShowPlayer: PropTypes.func,
	videosData: PropTypes.array,
};

export default PlayerModal;
