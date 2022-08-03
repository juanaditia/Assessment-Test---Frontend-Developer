import Head from "next/head";
import Image from "next/image";
import PageMain from "../components/PageMain";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="bg-[#4D4D4D]">
      <PageMain />
      {/* <MovieList movies={movies.Search} /> */}
    </div>
  );
}
