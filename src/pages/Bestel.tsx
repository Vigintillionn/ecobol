import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, SetStateAction, useState } from "react";
import { useSearchParams } from "react-router-dom";
import NumericInput from "../components/NumericInput";
import TextInput from "../components/TextInput";


export default function Bestel() {
  const [searchParams] = useSearchParams();
  const [amount, setAmount] = useState("1");

  const [error, setError] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState<number | undefined>(undefined);
  const [city, setCity] = useState("");

  let bottleType = searchParams.get("type");

  return (
    <div className="relative mb-[40rem] mx-0">
      <div className="shadow bg-green text-center rounded-md overflow-hidden my-8 h-[36rem] w-[20rem] absolute left-2/4 top-2/4 -translate-x-2/4 md:w-[48rem]">
        <div className="relative text-center overflow-hidden p-7 h-full w-full float-left md:w-[55%] md:text-left">
          <h1 className="font-mavenpro inline-block relative text-3xl m-0 text-gunmetal uppercase">{bottleType}</h1>
          <div>
            <div>  
              Aantal:
              <NumericInput className="ml-2" min={1} max={10} val={amount} onValChange={setAmount} />
              {/* { bottleType === "wijnfles" && 
                <div>
                  Grootte:
                  <Select options={[{ "name": "1L" }, { "name": "10L" }]} values={[{ "name": "1L" }]} onChange={ (val) => console.log(val) }/>
                </div> 
              } */}
            </div>
            <div className="w-full grid md:grid-cols-4 md:grid-rows-5 mt-4 text-gunmetal font-nunito">
              <h2 className="row-start-1 row-end-2 col-start-1 col-end-5 text-lg font-mavenpro  uppercase font-bold m-auto">Leveringsinformatie</h2>
              <input type="text" placeholder="Voornaam" className="row-start-2 row-end-2 col-start-1 col-end-3 mr-2 my-1 p-2 rounded-sm" value={""} />
              <input type="text" placeholder="Naam" className="row-start-2 row-end-2 col-start-3 col-end-5 mr-2 my-1 p-2 rounded-sm" />
              <input type="email" placeholder="E-mail" className="row-start-3 row-end-3 col-start-1 col-end-5 mr-2 my-1 p-2 rounded-sm" />
              <input type="text" placeholder="Adres" className="row-start-4 row-end-4 col-start-1 col-end-5 mr-2 my-1 p-2 rounded-sm" />
              <input type="number" placeholder="Postcode" className="row-start-5 row-end-5 col-start-1 col-end-2 mr-2 my-1 p-2 rounded-sm" value={postalCode ?? ""} onChange={(e) => setPostalCode(isNaN(parseInt(e.target.value)) ? undefined : parseInt(e.target.value))}  />
              <input type="text" placeholder="Stad" className="row-start-5 row-end-5 col-start-2 col-end-5 mr-2 my-1 p-2 rounded-sm" />
            </div>
            { error.length > 0 && 
              <span className="text-red block font-nunito">Gelieve en correct e-mail adres in te geven.</span>
            }
            { (postalCode !== 2580 && postalCode !== 3140) && postalCode?.toString().length === 4 &&
              <span className="text-red block mt-2 font-nunito">Wij leveren niet buiten Putte of Keerbergen, u zult gebruik moeten maken van een afhaalpunt.</span>
            }
          </div>
          <div className="absolute bottom-[5%] left-1/4 md:left-[8%]">
            <button type="submit" form="amount" className="bg-blue transition delay-300 ease-linear rounded-md relative overflow-hidden pointer outline-none border-none text-white p-0 m-0 group hover:bg-blue-darker">
              <span className="font-nunito transition-transform delay-300 inline-block px-3 py-5 m-0 text-lg bg-gunmetal border-0 -translate-x-[10%] pr-4 group-hover:-translate-x-[110%]">€{(parseInt(amount)*12)},-</span>
              <span className="font-nunito transition-transform delay-300 inline-block px-3 py-5 m-0 text-lg bg-gunmetal border-0 -translate-x-full absolute z-1 left-0 top-0 group-hover:translate-x-0"><FontAwesomeIcon icon={faShoppingCart} /></span>
              <span className="font-nunito transition-transform delay-300 inline-block px-3 py-5 m-0 text-lg z-10 font-semibold">Bestel Nu</span>
            </button>
          </div>
        </div>
        <div className="transition-all delay-300 ease-in-out inline-block relative overflow-hidden h-full float-right w-[45%] group max-md:hidden">
          <img className="w-full h-full object-cover transition-transform ease-in-out delay-75 group-hover:scale-105" src={"/Images/" + bottleType +  ".jpg"} alt="" />
          <div className="bg-gunmetal-accent font-nunito transition-all delay-300 ease-in-out -translate-x-full absolute leading-10 text-left text-xl cursor-no-drop text-white h-full w-full left-0 top-0 group-hover:translate-x-0">
            <h2 className="text-center font-mavenpro font-semibold">{toTitleCase(bottleType as string)}</h2>
            <ul className="list-disc">
              <li className="ml-8 font-nunito">Lorem, ipsum.</li>
              <li className="ml-8 font-nunito">Lorem, ipsum.</li>
              <li className="ml-8 font-nunito">Lorem, ipsum.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function toTitleCase(str: string) {
  return str.replace(
    /\w\S*/g,
    (txt: string) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}