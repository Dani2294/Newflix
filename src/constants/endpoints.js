//const REACT_APP_TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const URL = "https://api.themoviedb.org/3";

export const ENDPOINTS = {
	films: [
		{
			title: "Trending",
			url: `/trending/movie/week?api_key=750d717aee423aa3221d0ac25396478e&language=en-US`,
		},
		{
			title: "New release",
			url: `/movie/now_playing?api_key=750d717aee423aa3221d0ac25396478e&language=en-US`,
		},
		{
			title: "Action",
			url: `/discover/movie?api_key=750d717aee423aa3221d0ac25396478e&language=en-US&sort_by=popularity.desc&page=1&with_genres=28`,
		},
		{
			title: "Aventure",
			url: `/discover/movie?api_key=750d717aee423aa3221d0ac25396478e&language=en-US&sort_by=popularity.desc&page=1&with_genres=12`,
		},
		{
			title: "Animation",
			url: `/discover/movie?api_key=750d717aee423aa3221d0ac25396478e&language=en-US&sort_by=popularity.desc&page=1&with_genres=16`,
		},
		{
			title: "Comedy",
			url: `/discover/movie?api_key=750d717aee423aa3221d0ac25396478e&language=en-US&sort_by=popularity.desc&page=1&with_genres=35`,
		},
		{
			title: "Documentary",
			url: `/discover/movie?api_key=750d717aee423aa3221d0ac25396478e&language=en-US&sort_by=popularity.desc&page=1&include_adult=false&with_genres=99`,
		},
		{
			title: "Horror",
			url: `/discover/movie?api_key=750d717aee423aa3221d0ac25396478e&language=en-US&sort_by=popularity.desc&page=1&with_genres=27`,
		},
		{
			title: "Science Fiction",
			url: `/discover/movie?api_key=750d717aee423aa3221d0ac25396478e&language=en-US&sort_by=popularity.desc&page=1&with_genres=878`,
		},
	],
	series: [
		{
			title: "Action - Aventure",
			url: `/discover/tv?api_key=750d717aee423aa3221d0ac25396478e&language=en-US&sort_by=popularity.desc&page=1&with_genres=10759`,
		},
		{
			title: "Animation",
			url: `/discover/tv?api_key=750d717aee423aa3221d0ac25396478e&language=en-US&sort_by=popularity.desc&page=1&with_genres=16`,
		},
		{
			title: "Comedy",
			url: `/discover/tv?api_key=750d717aee423aa3221d0ac25396478e&language=en-US&sort_by=popularity.desc&page=1&with_genres=35`,
		},
		{
			title: "Crime",
			url: `/discover/tv?api_key=750d717aee423aa3221d0ac25396478e&language=en-US&sort_by=popularity.desc&page=1&with_genres=80`,
		},
		{
			title: "Drama",
			url: `/discover/tv?api_key=750d717aee423aa3221d0ac25396478e&language=en-US&sort_by=popularity.desc&page=1&with_genres=18`,
		},
		{
			title: "Documentary",
			url: `/discover/tv?api_key=750d717aee423aa3221d0ac25396478e&language=en-US&sort_by=popularity.desc&page=1&include_adult=false&with_genres=35`,
		},
		{
			title: "Family",
			url: `/discover/tv?api_key=750d717aee423aa3221d0ac25396478e&language=en-US&sort_by=popularity.desc&page=1&with_genres=10751`,
		},
		{
			title: "Sci-Fi - Fantasy",
			url: `/discover/tv?api_key=750d717aee423aa3221d0ac25396478e&language=en-US&sort_by=popularity.desc&page=1&with_genres=10765`,
		},
	],
};
