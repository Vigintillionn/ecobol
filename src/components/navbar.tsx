import { useState } from "react";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="h-16 w-full flex items-center relative py-2 px-0 bg-white decoration-black shadow-sm md:max-lg:pl-16 lg:max-xl:pl-48 xl:pl-64">
      <Link to="/" className="no-underline decoration-black text-xl ml-4 flex p-0 relative">
        <img src="/Images/logo.png" className="w-10 h-auto m-0 absolute top-2/4 -translate-y-2/4" />
        <p className="ml-12 font-mavenpro font-semibold">EcoBol</p>
      </Link>
      <button className="border-0 h-10 w-10 p-2 rounded-full bg-teal-400 cursor-pointer transition-colors ease-in-out absolute top-2/4 right-6 -translate-y-2/4 
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
      <div className={(isNavExpanded ? "expanded" : "md:max-lg:pr-16 lg:max-xl:pr-48 xl:pr-64") + " ml-auto font-mavenpro font-semibold"}>
        <ul className="max-md:hidden max-md:absolute max-md:top-14 max-md:left-0 max-md:flex-col max-md:w-full max-md:hamburger-height max-md:border-y
            md:flex md:p-0 ">
          <li className="list-none mx-4 md:rounded-3xl max-md:text-center max-md:m-0 hover:bg-green-200"><Link to="/" className="no-underline uppercase block w-full md:p-2 max-md:text-black max-md:py-6">Home</Link></li>
          <li className="list-none mx-4 md:rounded-3xl max-md:text-center max-md:m-0 hover:bg-green-200"><Link to="/over" className="no-underline uppercase block w-full md:p-2 max-md:text-black max-md:py-6">Over</Link></li>
          <li className="list-none mx-4 md:rounded-3xl max-md:text-center max-md:m-0 hover:bg-green-200"><Link to="/contact" className="no-underline uppercase block w-full md:p-2 max-md:text-black max-md:py-6">Contact</Link></li>
          <li className="list-none mx-4 md:rounded-3xl max-md:text-center max-md:m-0 hover:bg-green-200"><Link to="/info" className="no-underline uppercase block w-full md:p-2 max-md:text-black max-md:py-6">Info</Link></li>
          <li className="list-none mx-4 md:bg-green-400 md:rounded-3xl max-md:text-center max-md:m-0 hover:bg-green-200 transition-colors"><Link to="/shop" className="no-underline uppercase block w-full md:py-2 md:px-5 max-md:text-black max-md:py-6"><FontAwesomeIcon className="max-md:hidden" icon={faShoppingCart} /> Shop</Link></li>
        </ul>
      </div>
    </nav>
  )
}