export default function Footer() {
  return (
    <div className="text-center h-32 flex items-center justify-center">
      <p className="text-xl text-gray-800">
        &copy; Copyright 2022{" "}
        <span className="font-bold">
          {" "}
          <a
            className="text-gray-800 hover:text-[#ffc163] "
            href="https://github.com/juanaditia"
          >
            Juan Frido Aditiya
          </a>{" "}
        </span>
      </p>
    </div>
  );
}
