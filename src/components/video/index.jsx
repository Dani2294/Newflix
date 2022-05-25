import React from "react";
import ReactPlayer from "react-player";
import { VideoWrapper } from "./styles/video.style";

function Video({ startVideo }) {
	return (
		<VideoWrapper>
			<ReactPlayer
				playing={startVideo}
				url="/assets/videos/netflix-intro.mov"
				muted
				width="100%"
				height="100%"
			/>
		</VideoWrapper>
	);
}

export default Video;
