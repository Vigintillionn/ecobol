import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="z-[100] h-16 w-full flex items-center relative py-2 px-0 bg-white text-black shadow-md md:max-lg:pl-16 lg:max-xl:pl-48 xl:pl-64">
      <Link to="/" className="no-underline text-black text-xl ml-4 flex p-0 relative">
        <img src="/Images/logo.png" className="w-10 h-auto m-0 absolute top-2/4 -translate-y-2/4" alt="logo" />
        <p className="ml-12 font-mavenpro font-semibold">EcoBol</p>
      </Link>
      <button className="border-0 h-10 w-10 p-2 rounded-full bg-green cursor-pointer transition-colors ease-in-out absolute top-2/4 right-6 -translate-y-2/4 
        hover:bg-green-accent
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
          <li className="bg-white list-none mx-4 md:rounded-3xl max-md:text-center max-md:m-0 hover:bg-green-accent"><Link onClick={() => setIsNavExpanded(false)} to="/" className="no-underline uppercase block w-full md:p-2 max-md:text-black max-md:py-6">Home</Link></li>
          <li className="bg-white  list-none mx-4 md:rounded-3xl max-md:text-center max-md:m-0 hover:bg-green-accent"><Link onClick={() => setIsNavExpanded(false)} to="/over" className="no-underline uppercase block w-full md:p-2 max-md:text-black max-md:py-6">Over</Link></li>
          <li className="bg-white  list-none mx-4 md:rounded-3xl max-md:text-center max-md:m-0 hover:bg-green-accent"><Link onClick={() => setIsNavExpanded(false)} to="/contact" className="no-underline uppercase block w-full md:p-2 max-md:text-black max-md:py-6">Contact</Link></li>
          <li className="bg-white  list-none mx-4 md:rounded-3xl max-md:text-center max-md:m-0 hover:bg-green-accent"><Link onClick={() => setIsNavExpanded(false)} to="/info" className="no-underline uppercase block w-full md:p-2 max-md:text-black max-md:py-6">Info</Link></li>
          <li className="list-none mx-4 max-md:bg-white  md:bg-green md:rounded-3xl max-md:text-center max-md:m-0 hover:bg-green-accent transition-opacity"><Link onClick={() => setIsNavExpanded(false)} to="/shop" className="no-underline uppercase block w-full md:py-2 md:px-5 max-md:text-black max-md:py-6"><FontAwesomeIcon className="max-md:hidden" icon={faShoppingCart} /> Shop</Link></li>
        </ul>
      </div>
    </nav>
  )
}
