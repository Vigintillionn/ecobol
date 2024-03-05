import { faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSearchParams } from "react-router-dom";

export default function Betaal() {
  const [params] = useSearchParams();

  const payment = params.get("payment");
  const price = params.get("prijs");
  const email = params.get("email");
  const fName = params.get("fName");
  const takeaway = params.get("takeaway");

  return (
    <div className="min-h-full-nonav mx-0">
      <div className="mx-8 sm:mx-24 md:mx-48 lg:mx-96 xl:mx-[30rem] 2xl:mx-[36rem] my-12">
        <div className="w-full text-center mb-8">
          <span className="font-mavenpro opacity-80 font-lg">Beste {fName}</span>
          <h1 className="text-6xl font-mavenpro font-bold">Bedankt!</h1>
        </div>
        <div className="font-nunito text-gunmetal text-lg">
          <p>U heeft een mail ontvangen met de info over uw bestelling. Gelieve deze bij te houden.</p>
          <br />
          {
            payment === "cash" ? 
            <p>Gelieve <span className="font-bold">€{price},-</span> te betalen bij levering of ophaling van uw EcoBol.
              <br />
              <br />
              { takeaway 
                ? <span>Uw bestelling wordt zo snel mogelijk klaargemaakt, eens uw EcoBol wordt klaargemaakt ontvangt u nog een mail wanneer u uw EcoBol kan komen afhalen op het adres <span className="font-bold">{takeaway === "putte" ? "Pachtersvelden 3, 2580 Putte" : "Putsebaan 49/1, 3140 Keerbergen"}</span>.</span> 
                : <span>Na bevestiging van betaling zal u nog een mail ontvangen en zal de EcoBol binnen de 7 dagen worden geleverd. U ontvangt nog een mail eens de bezorger onderweg is.</span>
              }
            </p>
             : 
            <p>Gelieve <span className="font-bold">€{price},-</span> over te schrijven op de rekening <span className="font-bold">{process.env.REACT_APP_BANK_ACCOUNT}</span> met de mededeling <span className="font-bold">Betaling Ecobol: {email}</span>
              <br />
              <br />
              { takeaway 
                ? <span>Uw bestelling wordt zo snel mogelijk klaargemaakt, eens uw EcoBol wordt klaargemaakt ontvangt u nog een mail wanneer u uw EcoBol kan komen afhalen op het adres <span className="font-bold">{takeaway === "putte" ? "Pachtersvelden 3, 2580 Putte" : "Putsebaan 49/1, 3140 Keerbergen"}</span>.</span> 
                : <span>Na bevestiging van betaling zal u nog een mail ontvangen en zal de EcoBol binnen de 7 dagen worden geleverd. U ontvangt nog een mail eens de bezorger onderweg is.</span>
              }
            </p>
            
          }
          <div className="text-center mt-8"> 
            <a aria-label="Link naar onze Facebook" className="mr-2 text-gunmetal hover:opacity-50" href="/"><FontAwesomeIcon icon={faFacebook}/></a>
            <a aria-label="Link naar onze Instagram" className="mx-2 text-gunmetal hover:opacity-50" href="https://www.instagram.com/teamecobol/"><FontAwesomeIcon icon={faInstagram}/></a>
            <a aria-label="Link naar onze Tiktok" className="ml-2 text-gunmetal hover:opacity-50" href="/"><FontAwesomeIcon icon={faTiktok}/></a>
          </div>
        </div>
      </div>
    </div>
  )

}
