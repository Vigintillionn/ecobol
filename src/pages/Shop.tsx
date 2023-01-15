import { faBriefcase, faJar, faWineBottle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Ribbon from "../components/Ribbon";
// import { useState } from "react";


export default function Shop() {
  // const [stockWijnflessen, setStockWijnflessen] = useState(0);
  // const [stockWeckpotten, setStockWeckpotten] = useState(0);

  // if (setStockWijnflessen && setStockWeckpotten) console.log(1); // TODO: Clean this up
  let stockWijnflessen = 1, stockWeckpotten = 0;
  
  // TODO: Make better responsive
  return (
    <div className="min-h-full-nonav pb-8 mx-0 inline-block">
      <div className="w-full text-center m-0 p-0">
        {/* <p className="pt-8 font-nunito text-lg opacity-80 mx-4 md:mx-24 lg:mx-48 xl:mx-72 2xl:mx-96">Beste klant! Omwille van examens en meer interesse dan verwacht hebben wij momenteel geen stock meer en zullen wij pas in <span className="font-semibold">december</span> terug beginnen produceren! Wij hopen u dan zeker terug te zien.</p> */}
        <h1 className="pt-8 text-3xl font-mavenpro font-semibold tex">Shop</h1>
        <p className="font-nunito text-lg">Bestel hier een van onze prachtige en klimaatvriendelijke ecobollen!</p>
      </div>
      <ul className="box-border grid p-0 grid-cols-cards gap-8 my-8 mb-16 list-none overflow-hidden mx-2 min-[400px]:mx-12">
        <li className="relative">
          {/* <Ribbon text={stockWijnflessen ? "20% Korting!" : "Uitverkocht!"} /> */}
          <a href="/bestel?type=wijnfles" aria-label="Bestel een wijnfles" className={"relative block h-full overflow-hidden no-underline rounded-cards group" + (stockWijnflessen > 0 ? "" : "pointer-events-none cursor-default opacity-50")}>
            <img src="/Images/wijnfles.webp" alt="Foto van een plant in een doorzichte glazen wijnfles" className="w-full object-cover aspect-square" />
            <div className="absolute bottom-0 left-0 right-0 z-1 rounded-cards bg-green translate-y-full transition-transform delay-200 ease-in-out group-hover:translate-y-0">
              <div className="relative flex items-center gap-8 p-4 border-tl-cards border-tr-none border-bl-none border-br-none bg-green -translate-y-full transition-transform delay-200 ease-in-out group-hover:translate-y-0">
                <svg className="w-20 h-20 absolute bottom-full right-0 z-1 card_arc" xmlns="http://www.w3.org/2000/svg"><path fill="#A1C870" d="M 40 80 c 22 0 40 -22 40 -40 v 40 Z" /></svg>
                <div className="shrink-0 w-12 h-12 rounded-full bg-white text-center leading-[3.25rem]"><FontAwesomeIcon className="text-3xl" icon={faWineBottle} /></div>
                <div>
                  <h2 className="text-black text-xl font-mavenpro mt-0 mx-0 mb-1 uppercase">Wijnflessen</h2>
                  <span className="text-gunmetal flex gap-2 text-lg font-nunito font-semibold"><p className="">€15 per fles</p></span>
                  {/* <span className="text-gunmetal flex gap-2 text-lg font-nunito font-semibold"><p className="line-through text-red">€15</p> <p className="">€12 per fles</p></span> */}
                </div>
              </div>
              <p className="pt-0 px-8 pb-8 m-0 text-black font-nunito overflow-hidden card_desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
            </div>
          </a>  
        </li>
        <li className="relative">
          { stockWeckpotten <= 0 && <Ribbon text="Uitverkocht!"/> }
          <a href={stockWeckpotten > 0 ? "/bestel?type=weckpot" : "#"} aria-label="Bestel een weckpot" className={"relative block h-full overflow-hidden no-underline rounded-cards group" + (stockWeckpotten > 0 ? "" : "pointer-events-none cursor-default opacity-50")}>
            <img src="/Images/weckpot.webp" alt="Foto van een plant in een doorzichte glazen weckpot" className="w-full object-cover aspect-square" />
            <div className="absolute bottom-0 left-0 right-0 z-1 rounded-cards bg-green translate-y-full transition-transform delay-200 ease-in-out group-hover:translate-y-0">
              <div className="relative flex items-center gap-8 p-4 border-tl-cards border-tr-none border-bl-none border-br-none bg-green -translate-y-full transition-transform delay-200 ease-in-out group-hover:translate-y-0">
                <svg className="w-20 h-20 absolute bottom-full right-0 z-1 card_arc" xmlns="http://www.w3.org/2000/svg"><path fill="#A1C870" d="M 40 80 c 22 0 40 -22 40 -40 v 40 Z" /></svg>
                <div className="shrink-0 w-12 h-12 rounded-full bg-white text-center leading-[3.25rem]"><FontAwesomeIcon className="text-3xl" icon={faJar} /></div>
                <div>
                  <h2 className="text-black text-xl font-mavenpro mt-0 mx-0 mb-1 uppercase">Weckpotten</h2>
                  <span className="text-gunmetal text-lg font-nunito font-semibold">€15 per pot</span>
                </div>
              </div>
              <p className="pt-0 px-8 pb-8 m-0 text-black font-nunito overflow-hidden card_desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
            </div>
          </a>  
        </li>
        <li>
          <a href="/" aria-label="Schrijf je in voor een workshop" className="relative block h-full overflow-hidden no-underline rounded-cards group pointer-events-none cursor-default opacity-50">
            <img src="/Images/workshops.webp" alt="Foto met de tekst 'BINNENKORT' op" className="w-full h-auto object-cover" />
            <div className="absolute bottom-0 left-0 right-0 z-1 rounded-cards bg-green translate-y-full transition-transform delay-200 ease-in-out group-hover:translate-y-0">
              <div className="relative flex items-center gap-8 p-4 border-tl-cards border-tr-none border-bl-none border-br-none bg-green -translate-y-full transition-transform delay-200 ease-in-out group-hover:translate-y-0">
                <svg className="w-20 h-20 absolute bottom-full right-0 z-1 card_arc" xmlns="http://www.w3.org/2000/svg"><path fill="#A1C870" d="M 40 80 c 22 0 40 -22 40 -40 v 40 Z" /></svg>
                <div className="shrink-0 w-12 h-12 rounded-full bg-white text-center leading-[3.25rem]"><FontAwesomeIcon className="text-3xl" icon={faBriefcase} /></div>
                <div>
                  <h2 className="text-black text-xl font-mavenpro mt-0 mx-0 mb-1 uppercase">Workshop</h2>
                  <span className="text-gunmetal text-lg font-nunito font-semibold">€20 per persoon</span>
                </div>
              </div>
              <p className="pt-0 px-8 pb-8 m-0 text-black font-nunito overflow-hidden card_desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
            </div>
          </a>  
        </li>
      </ul>
      <div className="mx-24 mb-8 md:mx-72">
        <p className="text-center"><strong>Belangrijk!</strong> Aangezien wij een mini-onderneming van <a className="text-blue underline hover:opacity-60 transition-opacity delay-75" href="https://www.vlajo.org/" target="_blank" rel="noreferrer">VLAJO</a> zijn, kan de btw van ons product niet worden teruggetrokken. Indien u hier verdere vragen over hebt, gelieve ons te contacteren.</p>
      </div>
    </div>
  )
}

