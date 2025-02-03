import { useState } from "react";
import Home from "../../assets/home.svg";
import Home2 from "../../assets/icons/home2.svg";
const Button = () => {
    const [icon, setIcon] = useState (Home);
    let  isSectected :boolean = false;
    const event = () => {
        isSectected = !isSectected;
        setIcon(isSectected ? Home2 : Home);
    }
    return <button onClick={event} className="bg-slate-200  p-14 m-7 rounded-2xl shadow-2xl  shadow-pink-500 ">
        <img className="size-12 animate-ping" src={icon} alt="home" />
        
    </button>
    
  }
  
  export default Button