import { faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSearchParams } from "react-router-dom";

export default function Betaal() {
  const [params] = useSearchParams();

  const price = params.get("prijs");
  const email = params.get("email");
  const fName = params.get("fName");

  return (
    <div className="min-h-full-nonav mx-0">
      <div className="mx-8 sm:mx-24 md:mx-48 lg:mx-96 my-12">
        <div className="w-full text-center mb-8">
          <span className="font-mavenpro opacity-80 font-lg">Beste {fName}</span>
          <h1 className="text-6xl font-mavenpro font-bold">Bedankt!</h1>
        </div>
        <div className="font-nunito text-gunmetal text-lg">
          <p>U heeft een mail ontvangen met de info over uw bestelling. Gelieve deze bij te houden.</p>
          <br />
          <p>Gelieve <span className="font-bold">€{price},-</span> over te schrijven op de rekening <span className="font-bold">BE03 0019 4010 5484</span> met de mededeling <span className="font-bold">Betaling Ecobol: {email}</span>
            <br />
            <br />
            Na bevestiging van betaling zal u nog een mail ontvangen en zal de EcoBol binnen de 7 dagen worden geleverd. U ontvangt nog een mail eens de bezorger onderweg is.
          </p>
          <div className="text-center mt-8"> 
            <a className="mr-2 text-gunmetal hover:opacity-50" href="/"><FontAwesomeIcon icon={faFacebook}/></a>
            <a className="mx-2 text-gunmetal hover:opacity-50" href="https://www.instagram.com/teamecobol/"><FontAwesomeIcon icon={faInstagram}/></a>
            <a className="ml-2 text-gunmetal hover:opacity-50" href="/"><FontAwesomeIcon icon={faTiktok}/></a>
          </div>
        </div>
      </div>
    </div>
  )

}