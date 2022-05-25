import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Layout, SelectProfiles, Video } from "../components";

const audio = new Audio("/assets/netflix-song.mp3");

function Browse() {
	const [showProfiles, setShowProfiles] = useState(true);
	const [showVideo, setShowVideo] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();

	const path = location.pathname;

	useEffect(() => {
		if (path === "/browse") {
			setShowProfiles(true);
		} else if (path === "/browse/films" || path === "/browse/series") {
			setShowProfiles(false);
		}
	}, [path]);

	const handleShowProfiles = () => {
		setShowProfiles(false);
		setShowVideo(true);
		audio.autoplay = true;
		audio.play();
		setTimeout(() => {
			setShowVideo(false);
			navigate("/browse/films");
		}, 4000);
	};

	return (
		<div>
			{showProfiles ? (
				<SelectProfiles handleShowProfiles={handleShowProfiles} />
			) : (
				<Layout browse>
					{showVideo && <Video />}
					<Outlet />
				</Layout>
			)}
		</div>
	);
}

export default Browse;
