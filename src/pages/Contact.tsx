import React from "react";
import { faEnvelope, faUser, faPencil, faPaperPlane, faHouse, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";


export default function Contact() {
  function handleOnSubmit() {}

  return (
    <div className="min-h-full-nonav">
      <div className="flex flex-col w-[80%] mx-[10%] my-24 bg-green p-12 rounded-3xl shadow-2xl md:flex-row lg:w-[60%] lg:mx-[20%]">
        <div className="flex flex-col w-full relative md:w-[60%] md:mr-10">
          <h1 className="font-mavenpro text-4xl font-semibold mb-4">Contacteer Ons</h1>
          <hr className="w-[20%]" />
          <span className="my-4 font-nunito text-gunmetal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis impedit soluta beatae perferendis et nisi nostrum deserunt obcaecati voluptate repudiandae!</span>
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
          <form>

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
                placeholder="Subject" 
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