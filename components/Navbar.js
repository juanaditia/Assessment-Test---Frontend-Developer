import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#4D4D4D]">
      <div className="font-bold text-neutral-100 p-4 max-w-7xl mx-auto container tracking-widest font-neue">
        <Link href="/">
          <a className="text-base md:text-2xl">
            Mov
            <span className="text-[#ffc163]">ies</span>
          </a>
        </Link>
      </div>
    </nav>
  );
}
