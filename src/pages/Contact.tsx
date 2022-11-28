import emailjs from "@emailjs/browser";
import { faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHouse, faPaperPlane, faPencil, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";

const PUBLIC_KEY = "VydYsQWvyQEaGrLIJ";
const SERVICE_ID = "service_5pg4oe3";
const TEMPLATE_ID = "template_e06uvyl";

export default function Contact() {
  const form = useRef(null) as React.MutableRefObject<HTMLFormElement>;
  const [error, setError] = useState("");
  const [messageSucces, setMessageSuccess] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let senderMail = (form.current[0] as React.InputHTMLAttributes<HTMLFormElement>).value.toString();
    let senderName = (form.current[1] as React.InputHTMLAttributes<HTMLFormElement>).value.toString();
    let subject = (form.current[2] as React.InputHTMLAttributes<HTMLFormElement>).value.toString();
    let message = (form.current[3] as React.InputHTMLAttributes<HTMLFormElement>).value.toString();

    let err: string[] = [];
    setError("");
    if (!senderMail || !senderMail.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g)) err.push("Vul alstublieft een correct e-mail adres in.");
    if (message.split(" ").length < 10) err.push("Geef wat meer info alstublieft.");

    if (err.length > 0) {
      setError(err.join(" "));
      return;
    }

    const params = {
      from_name: senderName,
      from_email: senderMail,
      from_subject: subject,
      from_message: message,
    }

    emailjs.send(SERVICE_ID, TEMPLATE_ID, params, PUBLIC_KEY)
      .then((res) => {
        console.log(res.text);
        setMessageSuccess(true);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  return (
    <div className="min-h-full-nonav">
      <div className="flex flex-col w-[80%] mx-[10%] my-24 bg-green p-12 rounded-3xl shadow-2xl md:flex-row lg:w-[60%] lg:mx-[20%]">
        <div className="flex flex-col w-full relative md:w-[60%] md:mr-10">
          <h1 className="font-mavenpro text-4xl font-semibold mb-4">Contacteer Ons</h1>
          <hr className="w-[20%]" />
          <span className="my-4 font-nunito text-gunmetal">Hebt u enige vragen of ervaart u problemen met onze EcoBol? Aarzel dan niet ons te contacteren via mail of door dit contactformulier in te vullen.</span>
          <hr className="w-[20%]" />
          <ul className="mt-4">
            <li><FontAwesomeIcon className="mr-3 text-gunmetal" icon={faHouse}/>Vlieghavenlaan 18, Keerbergen 3140</li>
            <li><FontAwesomeIcon className="mr-3 text-gunmetal" icon={faPhone}/>+32 489 74 81 73</li>
            <li><FontAwesomeIcon className="mr-3 text-gunmetal" icon={faEnvelope}/>info@ecobol.be</li>
          </ul>
          <div className="lg:absolute lg:bottom-0">
            <h4 className="text-lg font-mavenpro font-semibold">Sociale Media</h4>
            <a className="mr-2 text-gunmetal hover:opacity-50" href="/"><FontAwesomeIcon icon={faFacebook}/></a>
            <a className="mx-2 text-gunmetal hover:opacity-50" href="/"><FontAwesomeIcon icon={faInstagram}/></a>
            <a className="mx-2 text-gunmetal hover:opacity-50" href="/"><FontAwesomeIcon icon={faTiktok}/></a>
          </div>
        </div>
        <div className="w-full flex justify-center items-center mx-auto md:w-[40%]">
          <form ref={form} onSubmit={sendEmail}>
            <div className="text-center relative">
              <label htmlFor="email" className="block font-mavenpro text-lg">Email<span className="text-red">*</span></label>
              <input className="block border w-full rounded-sm pl-8 peer transition-all delay-50 ease-in-out focus:pl-2 focus:pr-6"
                type="email"
                name="email"
                id="email"
                placeholder="Email" 
              />
              <i className="absolute text-gunmetal left-2 top-7 block transition-all delay-100 ease-in-out peer-focus:hidden"><FontAwesomeIcon icon={faEnvelope} /></i>
            </div>
            <div className="text-center relative">
              <label htmlFor="name" className="block font-mavenpro text-lg">Naam<span className="text-red">*</span></label>
              <input className="block border w-full rounded-sm pl-8 peer transition-all delay-50 ease-in-out focus:pl-2 focus:pr-6"
                type="name"
                name="name"
                id="name"
                placeholder="Naam" 
              />
              <i className="absolute text-gunmetal left-2 top-7 block transition-all delay-100 ease-in-out peer-focus:hidden"><FontAwesomeIcon icon={faUser} /></i>
            </div>
            <div className="text-center relative">
              <label htmlFor="subject" className="block font-mavenpro text-lg">Onderwerp<span className="text-red">*</span></label>
              <input className="block border w-full rounded-sm pl-8 peer transition-all delay-50 ease-in-out focus:pl-2 focus:pr-6"
                type="text"
                name="subject"
                id="subject"
                placeholder="Onderwerp" 
              />
              <i className="absolute text-gunmetal left-2 top-7 block transition-all delay-100 ease-in-out peer-focus:hidden"><FontAwesomeIcon icon={faPencil} /></i>
            </div>
            <div className="text-center">
              <label htmlFor="subject" className="block font-mavenpro text-lg">Bericht<span className="text-red">*</span></label>
              <textarea className="block border w-full rounded-sm px-2"
                id="subject"
                rows={5}
              />
            </div>
            {error.length > 0 && <span className="text-red">{error}</span>}
            {messageSucces && <span className="text-gunmetal">Uw bericht is succesvol verzonden.</span>}
            <button type="submit" className="bg-blue shadow-lg font-nunito block py-2 px-4 mx-auto my-4 rounded-2xl hover:opacity-80">
              <i className="mr-3"><FontAwesomeIcon icon={faPaperPlane} /></i>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}