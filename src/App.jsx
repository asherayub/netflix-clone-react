import React, { useState, useEffect } from "react";
import requests from "./requests";
import Row from "./Row";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const [movies, setMovies] = useState({
    trending: [],
    netflixOriginals: [],
    topRated: [],
    actionMovies: [],
    comedyMovies: [],
    romanceMovies: [],
  });

  function fetchData(endPoint, key) {
    return fetch(`https://api.themoviedb.org/3${endPoint}`)
      .then((response) => response.json())
      .then((data) => setMovies((prev) => ({ ...prev, [key]: data })))
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    fetchData(requests.fetchTrending, "trending");
    fetchData(requests.fetchNetflixOriginals, "netflixOriginals");
    fetchData(requests.fetchTopRated, "topRated");
    fetchData(requests.fetchActionMovies, "actionMovies");
    fetchData(requests.fetchComedyMovies, "comedyMovies");
    fetchData(requests.fetchRomanceMovies, "romanceMovies");
  }, []);
  return (
    <div className="App">
      <Header />
      <Row movie={movies.trending} rowTitle="Trending Now" />
      <Row movie={movies.netflixOriginals} rowTitle="Netflix Originals" />
      <Row movie={movies.topRated} rowTitle="Top Rated" />
      <Row movie={movies.actionMovies} rowTitle="Action" />
      <Row movie={movies.comedyMovies} rowTitle="Comedy" />
      <Row movie={movies.romanceMovies} rowTitle="Romance" />
      <Footer />
    </div>
  );
}

export default App;
