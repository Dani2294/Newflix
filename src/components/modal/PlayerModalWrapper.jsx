import React, { useState } from "react";
import ReactPlayer from "react-player";
import PropTypes from "prop-types";
import {
	PlayerCloseBtn,
	PlayerText,
	PlayerWrapper,
} from "./styles/modal.style";

function PlayerModalWrapper({ setShowPlayer, videoId }) {
	const [showClose, setShowClose] = useState(true);
	const url =
		videoId?.site === "YouTube"
			? "https://www.youtube.com/watch?v="
			: "https://vimeo.com/";
	return (
		<PlayerWrapper>
			{videoId?.key ? (
				<ReactPlayer
					onPause={() => setShowClose(!showClose)}
					onPlay={() => setShowClose(!showClose)}
					onEnded={() => setShowPlayer(false)}
					url={`${url}${videoId?.key}`}
					width="100%"
					height="100%"
					style={{
						position: "absolute",
						top: "0",
						left: "0",
						overscrollBehavior: "none",
					}}
					playing={true}
					controls={true}
				/>
			) : (
				<>
					<PlayerText>No video to show yet</PlayerText>
					<PlayerCloseBtn
						onClick={() => setShowPlayer(false)}
						className="close-btn">
						<img src="/assets/icons/add.png" alt="remove from my list" />
					</PlayerCloseBtn>
				</>
			)}
			{showClose && (
				<PlayerCloseBtn
					onClick={() => setShowPlayer(false)}
					className="close-btn">
					<img src="/assets/icons/add.png" alt="remove from my list" />
				</PlayerCloseBtn>
			)}
		</PlayerWrapper>
	);
}

PlayerModalWrapper.propTypes = {
	setShowPlayer: PropTypes.func,
	videoId: PropTypes.object,
};

export default PlayerModalWrapper;
