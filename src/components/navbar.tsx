import { useState } from "react";
import "./navbar.css";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="h-16 w-full flex items-center relative py-2 px-0 bg-white decoration-black shadow-sm">
      <a href="/" className="no-underline decoration-black text-xl ml-4">
        EcoBol
      </a>
      <button className="border-0 h-10 w-10 p-2 rounded-full bg-teal-400 cursor-pointer transition-colors ease-in-out absolute top-2/4 right-6 translaye-y-neg50 
        hover:bg-teal-200
        md:hidden
        "
        onClick={() => setIsNavExpanded(!isNavExpanded)}
      >
      <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className={isNavExpanded ? "ml-auto expanded" : "ml-auto"}>
        <ul className="max-md:hidden max-md:absolute max-md:top-14 max-md:left-0 max-md:flex-col max-md:w-full max-md:hamburger-height max-md:border-y
            md:flex md:p-0 ">
          <li className="list-none mx-4 max-md:text-center max-md:m-0 hover:bg-slate-400"><a href="/home" className="no-underline block w-full max-md:text-black max-md:py-6">Home</a></li>
          <li className="list-none mx-4 max-md:text-center max-md:m-0 hover:bg-slate-400"><a href="/over" className="no-underline block w-full max-md:text-black max-md:py-6">Over</a></li>
          <li className="list-none mx-4 max-md:text-center max-md:m-0 hover:bg-slate-400"><a href="/shop" className="no-underline block w-full max-md:text-black max-md:py-6">Shop</a></li>
          <li className="list-none mx-4 max-md:text-center max-md:m-0 hover:bg-slate-400"><a href="/contact" className="no-underline block w-full max-md:text-black max-md:py-6">Contact</a></li>
          <li className="list-none mx-4 max-md:text-center max-md:m-0 hover:bg-slate-400"><a href="/info" className="no-underline block w-full max-md:text-black max-md:py-6">Info</a></li>
        </ul>
      </div>
    </nav>
  )
}