import { useEffect, useState } from "react";
import React from "react";
import movieTrailer from "movie-trailer";
import ReactPlayer from "react-player";
import { GrClose } from "react-icons/gr";
import { BsPlayCircle } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
const Row = ({ movie, rowTitle }) => {
  const [videoId, setVideo] = useState("");
  const handleClick = (movie) => {
    if (
      movieTrailer(
        movie?.name ||
          movie?.title ||
          movie?.original_name ||
          movie?.original_title
      )
    ) {
      movieTrailer(
        movie?.name ||
          movie?.title ||
          movie?.original_name ||
          movie?.original_title
      )
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          if (urlParams.get("v") === videoId) setVideo("");
          else setVideo(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  //   closes video player if clicked outside of it
  useEffect(() => {
    window.addEventListener("click", () => {
      setVideo("");
    });
    return () => {
      window.removeEventListener("click", () => {
        setVideo("");
      });
    };
  }, []);

  return (
    <div className="row">
      <h2>{rowTitle}</h2>
      <div className="row__inner flex">
        {movie?.results?.map((movie) => {
          return (
            <div
              key={movie.id}
              className="movie__card"
              onClick={() => handleClick(movie)}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt=""
                loading="lazy"
              />

              <div className="overlay">
                <h3>{movie.title ? movie.title : movie.name}</h3>
                <span>{movie.vote_average.toFixed(1)}</span>
                <BsPlayCircle className="play__icon position__center" />
              </div>
            </div>
          );
        })}
      </div>
      {videoId && (
        <AnimatePresence>
          <motion.div
            className="video__player position__center"
            initial={{ opacity: 0, y: "-100vh" }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: "-100vh" }}
          >
            <button className="flex" onClick={() => setVideo("")}>
              <GrClose />
            </button>
            <ReactPlayer
              className="trailer"
              url={`https://www.youtube.com/watch?v=${videoId}`}
              playing={true}
              controls={true}
              width={"100%"}
              height={"100%"}
            />
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default Row;
