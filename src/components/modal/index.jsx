import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import axios from "axios";
import DetailsModal from "./DetailsModal";
import PlayerModal from "./PlayerModal";

const REACT_APP_TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;

function ModalContainer({ id, type, setShowModal }) {
	const [showPlayer, setShowPlayer] = useState(false);
	const [data, setData] = useState({});
	const [videos, setVideos] = useState([]);

	const path = useLocation().pathname;

	useEffect(() => {
		if (type === "trailer") {
			setShowPlayer(true);
		}
	}, [type]);

	useEffect(() => {
		if (path === "/browse/films") {
			// call api for films
			fetchData(id, "films")
				.then((res) => {
					setData(res);
					setVideos(res?.videos?.results);
				})
				.catch((err) => {
					console.log(err.message);
				});
		} else if (path === "/browse/series") {
			// call api for series
			fetchData(id, "series")
				.then((res) => {
					setData(res);
					setVideos(res?.videos?.results);
				})
				.catch((err) => {
					console.log(err.message);
				});
		}
	}, [path, id]);

	return (
		<>
			{type === "details" && (
				<DetailsModal id={id} setShowModal={setShowModal} data={data} />
			)}
			{type === "trailer" && showPlayer && (
				<PlayerModal
					id={id}
					setShowPlayer={setShowPlayer}
					videosData={videos}
				/>
			)}
		</>
	);
}

const fetchData = async (id, page) => {
	let urlParam = page === "films" ? "movie" : "tv";
	const res = await axios
		.get(
			`https://api.themoviedb.org/3/${urlParam}/${id}?api_key=750d717aee423aa3221d0ac25396478e&append_to_response=videos`
		)
		.then(({ data }) => {
			return data;
		});
	return res;
};

ModalContainer.propTypes = {
	id: PropTypes.number,
	type: PropTypes.string,
	setShowModal: PropTypes.func,
};

export default ModalContainer;
