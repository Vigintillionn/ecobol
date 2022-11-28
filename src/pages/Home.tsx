import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="my-auto mx-0">
      <div className="min-h-full-nonav w-full bg-gradient-to-t from-green to-[#deffb6] relative">
        
        <div className="flex flex-col h-full py-24 mx-[20%] lg:mx-[30%] md:py-32 md:flex-row">
          <div className="flex-homeText w-full">
            <h1 className="text-3xl font-mavenpro font-bold">Een EcoBol is</h1>
            <TypeAnimation
              sequence={[
                "Zelfvoorzienend",
                1000,
                "",
                1000,
                "Decoratief",
                1000,
                "",
                1000,
                "Klimaatvriendelijk",
                1000,
                "",
                1000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontWeight: "bolder", fontSize: "1.875rem", fontFamily: "MavenPro, cursive", marginBottom: "2rem" }}
            />
            <span className="font-nunito block text-lg text-gunmetal">De EcoBol is een gebotteld ecosysteem. Dit zijn plantjes in een gerecycleerde fles, die zichzelf onderhoudt door middel van een natuurfenomeen, fotosynthese. Hierdoor is er dus geen onderhoud nodig aan de plant.</span>
            <hr className="w-24 mt-8" />
            <div className="mt-8 space-x-4">
              <Link to="/shop" className="border text-gunmetal inline-block p-2 w-16 text-center uppercase hover:opacity-80 hover:border-[#00000099] transition-all ease-in-out delay-50">Shop</Link>
              <Link to="/info" className="border text-gunmetal inline-block p-2 w-16 text-center uppercase hover:opacity-80 hover:border-[#00000099] transition-all ease-in-out delay-50">Info</Link>
            </div>
          </div>
          <div className="flex-homeImage hidden md:block">
            <img src="/Images/bgimage.png" alt="" className="w-full h-auto hover:scale-105 transition-transform ease-in-out delay-100" />
          </div>
        </div>

      </div>
    </div>
  )
}