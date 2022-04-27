// import Head from "next/head";
// import {useEffect, useState} from "react";
// import Seo from "../components/Seo";

// const API_KEY = "fe70023ec53e73de5f4f566c124b89bd";
// export default function Home() {
//     const [movies, setMovies] = useState();
//     useEffect(() => {
//         (async () => {
//             const results = await(
//                 await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
//             ).json();
//             setMovies(results);
//         })();

//     }, [])
//     return (
//         <div>
//             <Seo title="Home"/> {!movies && <h4>Loding...</h4>}
//             {
//                 movies && movies
//                     .map((
//                         movie => <div key={movie.id}>
//                             <h4>{movie.original_title}</h4>
//                         </div>
//                     ))
//             }
//         </div>
//     );
// }

import { useEffect, useState } from "react";
import Seo from "../components/Seo";

const API_KEY = "fe70023ec53e73de5f4f566c124b89bd";

export default function Home() {
  const [movies, setMovies] = useState();
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      setMovies(results);
    })();
  }, []);
  return (
    <div>
      <Seo title="Home" />
      <h1 className="active">Hello</h1>
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </div>
  );
}