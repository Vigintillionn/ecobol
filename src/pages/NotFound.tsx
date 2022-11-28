import React from "react";

export default function NotFound() {
  return (
    <div className="min-h-full-nonav mx-0 relative">
      <div className="flex flex-col justify-center items-center min-h-full-nonav bg-blob bg-no-repeat bg-center">
        <h1 className="font-mavenpro text-black font-semibold text-6xl">404!</h1>
        <p className="font-nunito text-gunmetal text-lg my-8">De pagina die u zocht bestaat niet.</p>
        <a className="p-2 rounded-lg bg-white transition-opacity ease-in-out delay-75 hover:opacity-80" href="/">Home Pagina</a>
      </div>
    </div>
  )
}