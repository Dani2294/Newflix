import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { URL, ENDPOINTS } from "../constants/endpoints";

export default function useContent(page) {
	//console.log(ENDPOINTS);
	const [data, setData] = useState([]);

	useEffect(() => {
		if (page === "films") {
			ENDPOINTS.films?.forEach((cat) => {
				axios
					.get(`${URL}${cat.url}`)
					.then(({ data }) => {
						setData((prevState) => {
							return [
								...prevState,
								{
									id: uuidv4(),
									title: cat.title,
									slides: data.results,
								},
							];
						});
					})
					.catch((error) => {
						console.log(error.message);
					});
			});
		} else if (page === "series") {
			ENDPOINTS.series?.forEach((cat) => {
				axios
					.get(`${URL}${cat.url}`)
					.then(({ data }) => {
						setData((prevState) => {
							return [
								...prevState,
								{ id: uuidv4(), title: cat.title, slides: data.results },
							];
						});
					})
					.catch((error) => {
						console.log(error.message);
					});
			});
		}

		return () => null;
	}, [page]);

	//console.log(data);
	return data;
}

useContent.propTypes = {
	page: PropTypes.string.isRequired,
};
