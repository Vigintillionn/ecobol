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
            <h2 className="text-lg font-semibold font-mavenpro">Contact</h2>
            <ul className="text-black font-nunito">
              <li><FontAwesomeIcon className="mr-3 ml-2 opacity-80" icon={faHouse}/>Vlieghavenlaan 18, Keerbergen 3140</li>
              <li><FontAwesomeIcon className="mr-3 ml-2 opacity-80" icon={faPhone}/>+32 489 74 81 73</li>
              <li><FontAwesomeIcon className="mr-3 ml-2 opacity-80" icon={faEnvelope}/>info@ecobol.be</li>
              <li>
                <h2 className="text-lg font-semibold font-mavenpro">Volg ons!</h2>
                <a aria-label="Link naar onze Facebook" className="mx-2 hover:opacity-50" href="/"><FontAwesomeIcon icon={faFacebook}/></a>
                <a aria-label="Link naar onze Instagram" className="mx-2 hover:opacity-50" href="https://www.instagram.com/teamecobol/"><FontAwesomeIcon icon={faInstagram}/></a>
                <a aria-label="Link naar onze Tiktok" className="mx-2 hover:opacity-50" href="/"><FontAwesomeIcon icon={faTiktok}/></a>
              </li>
            </ul>
          </div> 
          <div className="flex-grow w-full text-center mb-4 sm:text-left sm:w-2/5 md:w-5/12 h-auto ">
            <h2 className="text-lg font-semibold font-mavenpro">Overzicht</h2>
            <ul className="text-black opacity-80 font-nunito">
              <li className="py-3 sm:py-0"><Link className="hover:opacity-50" to="/">Home</Link></li>
              <li className="py-3 sm:py-0"><Link className="my-4 sm:py-0 hover:opacity-50" to="/over">Over</Link></li>
              <li className="py-3 sm:py-0"><Link className="py-2 sm:py-0 hover:opacity-50" to="/info">Info</Link></li>
              <li className="py-3 sm:py-0"><Link className="py-2 sm:py-0 hover:opacity-50" to="/shop">Shop</Link></li>
              <li className="py-3 sm:py-0"><Link className="py-2 sm:py-0 hover:opacity-50" to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="flex-grow w-full text-center mb-4 sm:flex-row sm:text-left sm:w-1/5 md:w-2/12 h-auto ">
            <div className="text-center justify-center items-center sm:flex sm:flex-col sm:absolute sm:translate-x-0 sm:right-0 sm:top-6 md:top-2">
              <a href="https://www.vlajo.org/" aria-label="Link naar de website van VLAJO" target="_blank" rel="noreferrer" className="inline-block text-center sm:mr-10 md:mr-16"><img width="136" height="96" src="/Images/vlajobutton.webp" className="h-24 w-auto ml-4 mr-2 sm:mr-0" alt="Logo van VLAJO (vlaamese jongeren onderneming)" /></a>
              <a href="https://bruultjeshoek.be/" aria-label="Link naar de website van bruultjeshoek" target="_blank" rel="noreferrer" className="inline-block text-center mt-2 sm:mr-10 md:mr-16"><img width="206" height="96" src="/Images/bruultjeshoek.webp" className="h-24 w-auto ml-2 sm:ml-0" alt="Logo van cafetaria bruultjeshoek in sint-katelijne-waver" /></a>
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