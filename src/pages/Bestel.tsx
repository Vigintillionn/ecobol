import emailjs from "@emailjs/browser";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import NumericInput from "../components/NumericInput";

const PUBLIC_KEY = "IOMMNfJmmwxmjnagL";
const SERVICE_ID = "service_10ctl0q"; // service_p6on5ek
const TEMPLATE_ID_ORDER = "template_1ztz5g1";
const TEMPLATE_ID_CONFIRMATION = "template_snv2omo";

export default function Bestel() {
  const [searchParams] = useSearchParams();
  const [amount, setAmount] = useState("1");

  const [error, setError] = useState("");

  const [postalCode, setPostalCode] = useState<number | undefined>(undefined);

  const navigate = useNavigate();

  const form = useRef(null);

  let bottleType = searchParams.get("type");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(e.nativeEvent.submitter.id !== "orderbutton") return;

    let firstName = (form.current[3] as React.InputHTMLAttributes<HTMLFormElement>).value.toString();
    let lastName = (form.current[4] as React.InputHTMLAttributes<HTMLFormElement>).value.toString();
    let email = (form.current[5] as React.InputHTMLAttributes<HTMLFormElement>).value.toString();
    let address = (form.current[6] as React.InputHTMLAttributes<HTMLFormElement>).value.toString();
    let pCode = (form.current[7] as React.InputHTMLAttributes<HTMLFormElement>).value.toString();
    let city = (form.current[8] as React.InputHTMLAttributes<HTMLFormElement>).value.toString();
    let comments = (form.current[9] as React.InputHTMLAttributes<HTMLFormElement>).value.toString();

    // TODO: Check for valid
    let err: string[] = [];
    if (!firstName || !lastName  || !email || !address || !pCode || !city) err.push("Gelieve alle velden in te vullen.");
    if (!email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g)) err.push("Vul alstublieft een correct e-mail adres in.");
    // TODO: Make it send mail
    if (err.length > 0) {
      setError(err.join(" "));
      return;
    }

    let orderId = uuidv4().split("-")[0];
    let price = parseInt(amount)*(bottleType === "wijnfles" ? 12 : 15);

    let params = {
      firstName,
      lastName,
      email,
      address,
      pCode,
      city,
      comments,
      amount,
      bottleType,
      orderId,
      price
    }

    emailjs.send(SERVICE_ID, TEMPLATE_ID_ORDER, params, PUBLIC_KEY)
    .then((res) => {
      console.log(res.text);
    })
    .catch((err) => {
      console.log(err.message);
    });

    emailjs.send(SERVICE_ID, TEMPLATE_ID_CONFIRMATION, params, PUBLIC_KEY)
    .then((res) => {
      console.log(res.text);
    })
    .catch((err) => {
      console.log(err.message);
    });

    navigate(`/betaal?prijs=${price}&email=${email}&fName=${firstName}`);
  }

  return (
    <div className="relative mb-[50rem] mx-0 md:mb-[44rem]">
      <div className="shadow bg-green text-center rounded-md overflow-hidden my-8 h-[45rem] w-[20rem] absolute left-2/4 top-2/4 -translate-x-2/4 md:h-[40rem] md:w-[48rem]">
        <form ref={form} onSubmit={handleSubmit} id="order" className="relative text-center overflow-hidden p-7 h-full w-full float-left md:w-[55%] md:text-left">
          <h1 className="font-mavenpro inline-block relative text-3xl m-0 text-gunmetal uppercase">{bottleType}</h1>
          <div>
            <div>
              Aantal:
              <NumericInput className="ml-2" min={1} max={10} val={amount} onValChange={setAmount} />
            </div>
            <div className="w-full flex flex-col md:grid md:grid-cols-4 md:grid-rows-5 mt-4 text-gunmetal font-nunito">
              <h2 className="row-start-1 row-end-2 col-start-1 col-end-5 text-lg font-mavenpro  uppercase font-bold m-auto">Leveringsinformatie<span className="text-red font-normal text-2xl">*</span></h2>
              <input type="text" placeholder="Voornaam" className="ml-2 mr-2 my-1 p-2 rounded-sm md:row-start-2 md:row-end-2 md:col-start-1 md:col-end-3 md:ml-0" />
              <input type="text" placeholder="Naam" className="ml-2 mr-2 my-1 p-2 rounded-sm md:row-start-2 md:row-end-2 md:col-start-3 md:col-end-5 md:ml-0" />
              <input type="email" placeholder="E-mail" className="ml-2 mr-2 my-1 p-2 rounded-sm md:row-start-3 md:row-end-3 md:col-start-1 md:col-end-5 md:ml-0" />
              <input type="text" placeholder="Adres" className="ml-2 mr-2 my-1 p-2 rounded-sm md:row-start-4 md:row-end-4 md:col-start-1 md:col-end-5 md:ml-0" />
              <input type="number" placeholder="Postcode" className="ml-2 mr-2 my-1 p-2 rounded-sm md:row-start-5 md:row-end-5 md:col-start-1 md:col-end-2 md:ml-0" value={postalCode ?? ""} onChange={(e) => setPostalCode(isNaN(parseInt(e.target.value)) ? undefined : parseInt(e.target.value))}  />
              <input type="text" placeholder="Stad" className="ml-2 mr-2 my-1 p-2 rounded-sm md:row-start-5 md:row-end-5 md:col-start-2 md:col-end-5 md:ml-0" />
            </div>
            { error.length > 0 &&
              <span className="text-red block font-nunito">Gelieve en correct e-mail adres in te geven. Gelieve alle velden in te vullen. </span>
            }
            { (postalCode !== 2580 && postalCode !== 3140) && postalCode?.toString().length === 4 &&
              <span className="text-red block mt-2 font-nunito">Wij leveren niet buiten Putte of Keerbergen, u zult gebruik moeten maken van een afhaalpunt.</span>
            }
            <div className="w-full text-gunmetal font-nunito text-center">
              <h2 className="text-lg font-mavenpro  uppercase font-bold my-2">Opmerkingen</h2>
              <textarea placeholder="Hebt u enige opmerkingen of dingen die wij moeten weten, laat ze hier acher." className="w-full max-h-20 mr-2 my-1 p-2 rounded-sm"></textarea>
            </div>
          </div>
          <div className="absolute bottom-[4%] left-1/4 md:left-[6%]">
            <button type="submit" form="order" id="orderbutton" className="bg-blue transition delay-300 ease-linear rounded-md relative overflow-hidden pointer outline-none border-none text-white p-0 m-0 group hover:bg-blue-darker">
              <span className="font-nunito transition-transform delay-300 inline-block px-3 py-5 m-0 text-lg bg-gunmetal border-0 -translate-x-[10%] pr-4 group-hover:-translate-x-[110%]">€{(parseInt(amount)*(bottleType === "wijnfles" ? 12 : 15))},-</span>
              <span className="font-nunito transition-transform delay-300 inline-block px-3 py-5 m-0 text-lg bg-gunmetal border-0 -translate-x-full absolute z-1 left-0 top-0 group-hover:translate-x-0"><FontAwesomeIcon icon={faShoppingCart} /></span>
              <span className="font-nunito transition-transform delay-300 inline-block px-3 py-5 m-0 text-lg z-10 font-semibold">Bestel Nu</span>
            </button>
          </div>
        </form>

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