import React from "react";

export default function Over() {
  return (
    <div className="min-h-full-nonav mx-0">
      <div className="h-48 md:h-96 bg-green shadow-2xl z-[-1]">
        <h1 className="text-center font-mavenpro text-[2.5rem] text-black font-bold pt-10">Over Ons</h1>
      </div>
      <div className="relative">
        <img src="/Images/placeholder.webp" alt="Onze teamfoto" className="w-[20rem] md:w-[36rem] aspect-[16/9] object-cover absolute left-2/4 -translate-x-2/4 top-2 md:-top-24 -translate-y-2/4" />
        <div className="pt-28 md:pt-20 mx-[20%] text-center">
          <p>Bij Ecobol, geloven we in een duurzamere maar nog steeds mooie wereld.
            Daarom ontwikkelde wij de EcoBol dat zeer ecologisch, maar nog steeds prachtig is.
            Wij focussen op het ecologisch aspect door lege wijnflessen en weckpotten een nieuw en mooier leven te geven, terwijl we jouw woning wat extra kleur geven.
          </p>
          <br />
        </div>
        <div className="flex content-center items-center max-lg:flex-wrap flex-row mx-20 md:mx-40 gap-4 mb-8">

          <div className="w-full h-full pb-2 bg-green grow sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
            <img src="/Images/placeholder.webp" alt="Foto van Yarne Ramakers" className="w-full aspect-[4/3] object-cover overflow-hidden transition-transform ease-in-out delay-100 hover:scale-110" />
            <div className="text-center">  
              <span className="font-mavenpro font-bold text-lg">Yarne Ramakers</span>
              <hr className="w-[80%] ml-[10%]" />
              <p className="font-nunito text-gunmetal">Gedelegeerd Bestuurder</p>
              <p className="font-nunito text-sm text-gunmetal">Putte</p>
            </div>
          </div>
          <div className="w-full h-full pb-2 bg-green grow sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
            <img src="/Images/placeholder.webp" alt="Foto van Robbe Van den put" className="w-full aspect-[4/3] object-cover overflow-hidden transition-transform ease-in-out delay-100 hover:scale-110" />
            <div className="text-center">  
              <span className="font-mavenpro font-bold text-lg">Robbe Van den put</span>
              <hr className="w-[80%] ml-[10%]" />
              <p className="font-nunito text-gunmetal">Financieel Directeur</p>
              <p className="font-nunito text-sm text-gunmetal">Beerzel</p>
            </div>
          </div>
          <div className="w-full h-full pb-2 bg-green grow sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
            <img src="/Images/placeholder.webp" alt="Foto van Daan Pelgrims" className="w-full aspect-[4/3] object-cover overflow-hidden transition-transform ease-in-out delay-100 hover:scale-110" />
            <div className="text-center">  
              <span className="font-mavenpro font-bold text-lg">Daan Pelgrims</span>
              <hr className="w-[80%] ml-[10%]" />
              <p className="font-nunito text-gunmetal">Commercieel Directeur</p>
              <p className="font-nunito text-sm text-gunmetal">Beerzel</p>
            </div>
          </div>
          <div className="w-full h-full pb-2 bg-green grow sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
            <img src="/Images/placeholder.webp" alt="Foto van Nils Delhougne" className="w-full aspect-[4/3] object-cover overflow-hidden transition-transform ease-in-out delay-100 hover:scale-110" />
            <div className="text-center">  
              <span className="font-mavenpro font-bold text-lg">Nils Delhougne</span>
              <hr className="w-[80%] ml-[10%]" />
              <p className="font-nunito text-gunmetal">Technisch Directeur</p>
              <p className="font-nunito text-sm text-gunmetal">Haacht</p>
            </div>
          </div>
          <div className="w-full h-full pb-2 bg-green grow sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
            <img src="/Images/placeholder.webp" alt="Foto van Pieter Van de Ven" className="w-full aspect-[4/3] object-cover overflow-hidden transition-transform ease-in-out delay-100 hover:scale-110" />
            <div className="text-center">  
              <span className="font-mavenpro font-bold text-lg">Pieter Van de Ven</span>
              <hr className="w-[80%] ml-[10%]" />
              <p className="font-nunito text-gunmetal">Administratief Directeur</p>
              <p className="font-nunito text-sm text-gunmetal">Keerbergen</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}