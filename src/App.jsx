import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import MovieCard from "./components/MovieCard";
import Spinner from "./components/Spinner";
import { useDebounce } from "use-debounce";
import { updateSearchKeyWord, getTrendingList } from "./appWrite";
import HeroCard from "./components/HeroCard";

const BASE_API_URL = "https://api.themoviedb.org/3";
const App = () => {
  const [searchTerm, setsearchTerm] = useState("");
  const [error, setError] = useState("");
  const [moviesData, setMoviesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [debouncedSearchTerm] = useDebounce(searchTerm, 2500);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [randowImages, setRandowImages] = useState([]);
  const fetchData = async (query = "") => {
    setLoading(true);
    setError("");
    try {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_TMDPB_API_KEY}`,
        },
      };
      const URL = query
        ? `${BASE_API_URL}/search/movie?include_adult=true&query=${encodeURIComponent(
            query
          )}`
        : `${BASE_API_URL}/discover/movie?sort_by=popularity.desc&include_adult=true`;

      const res = await fetch(URL, options);

      if (res.status !== 200) {
        throw new Error("Failed to fetch data", res?.message);
      }
      const data = (await res.json())?.results;
      if (!data) throw new Error("Failed to retrieve data");
      setMoviesData(data);
      if (query && data.length > 0) {
        await updateSearchKeyWord(query, data[0]);
      }
      setHeroImage(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const getTrendingMovies = async () => {
    try {
      const res = await getTrendingList();
      setTrendingMovies(res);
    } catch (error) {
      console.log("Error fetching trending movies", error);
    }
  };

  useEffect(() => {
    fetchData(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const setHeroImage = (data) => {
    if (data.length < 3) return;
    const indices = new Set();
    while (indices.size < 3) {
      indices.add(Math.floor(Math.random() * data.length));
    }
    const randomImages = [...indices].map((index) => data[index].poster_path);
    setRandowImages(randomImages);
  };

  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          {/* <img src="./hero-img.png" alt="Hero banner" /> */}
          {randowImages.length > 0 && <HeroCard randowImages={randowImages} />}

          <h2 className="text-center text-5xl">
            Find your Favorite <span className="text-gradient"> Movies </span>
            here
          </h2>
        </header>

        {trendingMovies.length > 0 && (
          <section className="trending">
            <h2 className=" ml-10"> Trending Movies</h2>
            <ul>
              {trendingMovies.map((movie, index) => (
                <li key={index}>
                  <p className="text-blue-900">{index + 1}</p>
                  <img src={movie.poster_url} alt={movie.title} />
                </li>
              ))}
            </ul>
          </section>
        )}

        <Search searchTerm={searchTerm} setsearchTerm={setsearchTerm} />
        <section className="all-movies">
          <h2 className="mt-10 ml-10">All Movies</h2>

          {loading ? (
            <Spinner />
          ) : error ? (
            <span className="text-red-500">{error}</span>
          ) : (
            <ul>
              {moviesData.length > 0 ? (
                moviesData.map((item) => (
                  <MovieCard key={item.id} movie={item} />
                ))
              ) : (
                <span className="text-white">
                  Movie for "{searchTerm}" not found...
                </span>
              )}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
};

export default App;
