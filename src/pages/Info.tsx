import React from "react";

export default function Info() {
  return (
    <div className="min-h-full-nonav mx-0">
      <div className="flex flex-col w-full mt-10 lg:mt-20 gap-32">
        <div className="flex flex-row lg:mx-24 gap-16">
          <img src="/Images/vlajobutton.jpg" className="h-40 w-auto ml-16 hidden md:block" alt="" />
          <div className="mx-20 md:ml-0">
            <h1 className="font-mavenpro text-3xl text-black font-semibold mb-4">Wij zijn een <a href="/" className="underline transition-opacity delay-50 ease-in-out hover:opacity-80">VLAJO</a> onderneming</h1>
            <span className="font-nunito text-gunmetal text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At soluta, nihil dolorem vel repellendus amet ut tempore laborum similique eum aliquam animi, porro cum ipsa tenetur hic ullam perferendis praesentium quod ipsam sed libero recusandae? Aliquam laborum et quaerat, dolor repellat, quo perspiciatis ullam, doloribus nobis molestias odit architecto nostrum.</span>
          </div>
        </div>
        <div className="flex flex-row lg:mx-24">
          <div className="mx-20 mb-10 md:mr-0 lg:ml-16">
            <h1 className="font-mavenpro text-3xl text-black font-semibold mb-4">Belangrijke informatie</h1>
            <span className="font-nunito text-gunmetal text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquam vero est illo cum rerum, quas, voluptates dolor numquam itaque ex optio nemo ipsam eaque velit reiciendis at aspernatur eum fugiat ipsa! Laudantium illo reprehenderit at ut commodi eum deserunt atque mollitia error perspiciatis voluptatum obcaecati, minus illum consectetur! Nobis?</span>
            <br />
            <br />
            <span className="font-nunito text-gunmetal text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquam vero est illo cum rerum, quas, voluptates dolor numquam itaque ex optio nemo ipsam eaque velit reiciendis at aspernatur eum fugiat ipsa! Laudantium illo reprehenderit at ut commodi eum deserunt atque mollitia error perspiciatis voluptatum obcaecati, minus illum consectetur! Nobis?</span>
          </div>
          <img src="/Images/infobg.png" className="w-72 max-lg:h-72 object-cover mr-20 transition-transform ease-in-out delay-100 hover:scale-105 hidden md:inline-block lg:w-96 lg:aspect-square" alt="" />
        </div>
      </div>
    </div>
  )
}