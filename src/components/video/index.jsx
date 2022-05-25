import React from "react";
import ReactPlayer from "react-player";
import { VideoWrapper } from "./styles/video.style";

function Video() {
	return (
		<VideoWrapper>
			{/* <ReactPlayer
				playing={true}
				url="/assets/videos/netflix-intro.mov"
				muted
				width="100%"
				height="100%"
			/> */}
			<video
				autoPlay={true}
				loop={true}
				controls={false}
				playsInline
				muted
				src="/assets/videos/netflix-intro.mov"
				type="video/mp4"
			/>
		</VideoWrapper>
	);
}

export default Video;
