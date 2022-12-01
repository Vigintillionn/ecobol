import { useEffect, useState } from "react";
interface numericInputProps {
  min: number;
  max: number;
  val: string; 
  onValChange: (val: string) => void;
  className?: string | undefined;
}

export default function NumericInput(props: numericInputProps) {
  const val: string = props.val ;
  const setVal: (val: string) => void = props.onValChange;

  const [mobile, setMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setMobile(window.innerWidth < 768);
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let num = parseInt(e.target.value);
    changeValue(num);
  }

  const changeValue = (val: number) => {
    setVal((isNaN(val) ? "" : val > props.max ? props.max : Math.max(props.min, val)).toString());
  }

  return (
    <span className="relative inline-block"> {/* wrap */}
      <input className={(props.className ?? "") + " rounded-sm border-box font-md pr-[3.4ex] text-center md:pl-0 md:pr-[3ex] pl-[3.4ex] md:text-left"} type="text" onChange={handleChange} value={val} /> {/* input */}
      <button className="absolute right-[2px] top-[2px] bottom-[2px] w-[3.3ex] border-solid border-[1px] border-b-0 text-center cursor-default transition-all delay-100 bg-blue rounded-sm md:rounded-bl-none md:rounded-br-none md:w-[2.26ex] md:bottom-2/4 md:shadow-nibutton-inactive hover:opacity-80 active:shadow-nibutton-active active:opacity-60" onClick={() => changeValue(parseInt(val) + 1)} aria-label="Verhoog het aantal producten die u wil bestellen">
        {mobile ? 
          <div>
            <i className="absolute top-2/4 left-2/4 w-[10px] h-[2px] bg-gunmetal -mt-[1px] mr-0 mb-0 -ml-[5px]"></i>
            <i className="absolute top-2/4 left-2/4 w-[2px] h-[10px] bg-gunmetal -mt-[5px] mr-0 mb-0 -ml-[1px]"></i>
          </div> : 
          <i className="absolute bg-none top-2/4 left-2/4 w-0 h-0 border-solid border-t-0 border-r-[0.6ex] border-b-[0.6ex] border-l-[0.6ex] border-t-transparent border-x-transparent border-b-gunmetal -mt-[0.3ex] mr-0 mb-0 -ml-[0.56ex]" />}  
      </button>
      <button className="absolute right-auto left-[10px] bottom-[2px] top-[2px] w-[3.3ex] border-solid border-[1px] border-t-0 text-center cursor-default transition-all delay-100 bg-blue rounded-sm md:rounded-tl-none md:rounded-tr-none md:top-2/4 md:shadow-nibutton-inactive md:w-[2.26ex] md:right-[2px] md:left-auto hover:opacity-80 active:shadow-nibutton-active active:opacity-60" onClick={() => changeValue(parseInt(val) - 1)} aria-label="Verhoog het aantal producten die u wil bestellen">
        {mobile ? <i className="absolute top-2/4 left-2/4 w-[10px] h-[2px] bg-gunmetal -mt-[1px] mr-0 mb-0 -ml-[5px]"></i> : <i className="absolute top-2/4 left-2/4 w-0 h-0 border-t-[0.6ex] border-r-[0.6ex] border-b-0 border-l-[0.6ex] border-t-gunmetal border-x-transparent border-b-transparent border-solid -mt-[0.3ex] mr-0 mb-0 -ml-[0.56ex]" />}  
      </button>
    </span>
  )
}

