
import { KeyboardEvent } from "react";
import { hydrateRoot } from "react-dom/client";
interface TextFieldPromt{
  placeholder? : string;
  onEmit: (value: string ) => void;
}
const Textfield= ({placeholder, onEmit}: TextFieldPromt) => {
  const onkeyUp = (event: KeyboardEvent <HTMLInputElement>)=>{
    onEmit(event.currentTarget.value);
  };

  return (
    
    <input className=" rounded-md text-2xl bg-black text-white w-40   ring-1 ring-purple-500 mb-24 px-2 py-1 " type="text" placeholder={placeholder} onKeyUp={onkeyUp} />
  )
}

export default Textfield
