import Meta from "../components/Meta";

export default function Kontak() {
  return (
    <div className="text-center mt-20">
      <Meta title="Kontak kami" />
      <h1 className="text-4xl font-bold text-gray-800">KONTAK KAMI</h1>
      <p className=" text-xl text-gray-800 mt-4">
        Linkedin :{" "}
        <a
          className="text-gray-800 hover:text-[#ffc163] "
          href="https://www.linkedin.com/in/juanfridoaditiya/"
        >
          {" "}
          Juan Frido Aditiya{" "}
        </a>
      </p>

      <p className=" text-xl text-gray-800 mt-2">
        Github :{" "}
        <a
          className="text-gray-800 hover:text-[#ffc163] "
          href="https://github.com/juanaditia"
        >
          {" "}
          Juan Aditia{" "}
        </a>
      </p>
    </div>
  );
}
