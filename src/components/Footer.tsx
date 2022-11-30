import { faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHouse, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="text-black bg-green pt-12 relative bottom-0 w-full inline-block shadow-sm">
      <div className="">
        <div className="flex flex-wrap mx-24 md:mx-32">
          <div className="flex-grow w-full text-center mb-4 sm:text-left sm:w-2/5 md:w-5/12 h-auto ">
            <h4 className="text-lg font-semibold font-mavenpro">Contact</h4>
            <ul className="text-black font-nunito">
              <li><FontAwesomeIcon className="mr-3 ml-2 opacity-80" icon={faHouse}/>Vlieghavenlaan 18, Keerbergen 3140</li>
              <li><FontAwesomeIcon className="mr-3 ml-2 opacity-80" icon={faPhone}/>+32 489 74 81 73</li>
              <li><FontAwesomeIcon className="mr-3 ml-2 opacity-80" icon={faEnvelope}/>info@ecobol.be</li>
              <li>
                <h4 className="text-lg font-semibold font-mavenpro">Volg ons!</h4>
                <a className="mx-2 hover:opacity-50" href="/"><FontAwesomeIcon icon={faFacebook}/></a>
                <a className="mx-2 hover:opacity-50" href="https://www.instagram.com/teamecobol/"><FontAwesomeIcon icon={faInstagram}/></a>
                <a className="mx-2 hover:opacity-50" href="/"><FontAwesomeIcon icon={faTiktok}/></a>
              </li>
            </ul>
          </div> 
          <div className="flex-grow w-full text-center mb-4 sm:text-left sm:w-2/5 md:w-5/12 h-auto ">
            <h4 className="text-lg font-semibold font-mavenpro">Overzicht</h4>
            <ul className="text-black opacity-80 font-nunito">
              <li><Link className="hover:opacity-50" to="/">Home</Link></li>
              <li><Link className="hover:opacity-50" to="/over">Over</Link></li>
              <li><Link className="hover:opacity-50" to="/info">Info</Link></li>
              <li><Link className="hover:opacity-50" to="/shop">Shop</Link></li>
              <li><Link className="hover:opacity-50" to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="flex-grow w-full text-center mb-4 sm:flex-row sm:text-left sm:w-1/5 md:w-2/12 h-auto ">
            <div className="text-center sm:flex sm:flex-col sm:absolute sm:translate-x-0 sm:right-0 sm:top-6 md:top-2">
              <a href="https://www.vlajo.org/" target="_blank" rel="noreferrer" className="inline-block text-center sm:mr-10 md:mr-16"><img src="/Images/vlajobutton.jpg" className="h-24 w-auto mr-2 sm:mr-0" alt="vlajo" /></a>
              <a href="https://bruultjeshoek.be/" target="_blank" rel="noreferrer" className="inline-block text-center mt-2 sm:mr-10 md:mr-16"><img src="/Images/bruultjeshoek.jpg" className="h-24 w-auto ml-2 sm:ml-0" alt="vlajo" /></a>
            </div>
          </div>
        </div>
        <hr className="w-11/12 m-auto"/>
        <div className="flex flex-wrap mx-24 my-4">
          <p className="text-black font-nunito flex-grow w-1/3 h-auto text-center">
            &copy;{new Date().getFullYear()} EcoBol | All rights served
          </p>
        </div>
      </div>
    </footer>
  )
}