import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import NumericInput from "../components/NumericInput";

export default function Bestel() {
  const [searchParams] = useSearchParams();
  const [amount, setAmount] = useState("1");

  let bottleType = searchParams.get("type");

  return (
    <div className="relative my-auto mx-0">
      <div className="shadow bg-green text-center rounded-md overflow-hidden my-8 h-[36rem] w-[20rem] absolute left-2/4 top-2/4 -translate-x-2/4 md:w-[48rem]">
        <div className="relative text-center overflow-hidden p-7 h-full w-full float-left md:w-5/12 md:text-left">
          <h1 className="font-mavenpro inline-block relative text-3xl m-0 text-gunmetal uppercase">{bottleType}</h1>
          <div>
            <div className="">  
              Aantal:
              <NumericInput className="ml-2" min={1} max={10} val={amount} onValChange={setAmount} />
            </div>
          </div>
          <div className="absolute bottom-[10%] left-1/4 md:left-[12.8%]">
            <button type="submit" form="amount" className="bg-blue transition delay-300 ease-linear rounded-md relative overflow-hidden pointer outline-none border-none text-white p-0 m-0 group hover:bg-blue-darker">
              <span className="font-nunito transition-transform delay-300 inline-block px-3 py-5 m-0 text-lg bg-gunmetal border-0 -translate-x-[10%] pr-4 group-hover:-translate-x-[110%]">€{(parseInt(amount)*12)},-</span>
              <span className="font-nunito transition-transform delay-300 inline-block px-3 py-5 m-0 text-lg bg-gunmetal border-0 -translate-x-full absolute z-1 left-0 top-0 group-hover:translate-x-0"><FontAwesomeIcon icon={faShoppingCart} /></span>
              <span className="font-nunito transition-transform delay-300 inline-block px-3 py-5 m-0 text-lg z-10 font-semibold">Bestel Nu</span>
            </button>
          </div>
        </div>
        <div className="transition-all delay-300 ease-in-out inline-block relative overflow-hidden h-full float-right w-[45%] group max-md:hidden">
          <img className="w-full h-full" src="/Images/wijnfles.png" alt="" />
          <div className="bg-gunmetal-accent font-nunito transition-all delay-300 ease-in-out -translate-x-full absolute leading-10 text-left text-xl cursor-no-drop text-white h-full w-full left-0 top-0 group-hover:translate-x-0">
            <h2 className="text-center font-mavenpro font-semibold">Test</h2>
            <ul>
              <li className="ml-2 font-nunito">TEST</li>
              <li className="ml-2 font-nunito">TEST</li>
              <li className="ml-2 font-nunito">TEST</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}