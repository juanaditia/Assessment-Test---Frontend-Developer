import axios from "axios";
import PageMain from "../components/PageMain";
import MovieList from "../components/MovieList";
import { server } from "../config";

export default function Home({ movies }) {
  console.log(movies);
  return (
    <div className="bg-[#4D4D4D]">
      <PageMain />
      <MovieList movies={movies.results} />
    </div>
  );
}

export async function getStaticProps() {
  const res = await axios(
    `${server}/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const movies = res.data;

  return {
    props: { movies },
  };
}
