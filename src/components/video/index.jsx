import React from "react";
import ReactPlayer from "react-player";
import { VideoWrapper } from "./styles/video.style";

function Video() {
	return (
		<VideoWrapper>
			<ReactPlayer
				playing
				url="/assets/videos/netflix-intro.mov"
				muted
				width="100%"
				height="100%"
			/>
		</VideoWrapper>
	);
}

export default Video;
