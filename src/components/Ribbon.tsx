export default function Ribbon(props: { text: string }) {
  return (
    <div className="
      w-36 h-36 overflow-hidden absolute -top-2 -left-2
      before:absolute before:z-[-1] before:content-[''] before:block before:border-4 before:top-0 before:right-0
      after:absolute after:z-[-1] after:content-[''] after:block after:border-8 after:border-red after:bottom-0 after:left-0
    ">
      <span className="z-10 absolute block w-52 px-4 py-0 bg-red shadow text-white text-md uppercase text-center -right-6 top-12 -rotate-45">{props.text}</span>
    </div>
  )
}