import { Link } from "react-scroll";
import { MdOutlineHome } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";
import { MdOutlineBusinessCenter,MdContactPhone, } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { GiSkills } from "react-icons/gi";

const NavBar = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full  overlflow-hidden z-50 ">
      <div className="container max-auto ">
        <div className="w-full bg-black/20 backdrop-blur-3xl h-[96px] items-center  rounded-lg max-w-[460px] flex mx-auto px-5 justify-between text-white/50">
        <Link  smooth={true} offset={-200} activeClass="active" spy={true} to="banner" className="cursor-pointer  hover:ring-2   rounded-full w-[60px] duration-1000  h-[60px] flex items-center justify-center ">
          <MdOutlineHome />
        </Link>
        <Link smooth={true} activeClass="active" spy={true} to="header" className="cursor-pointer w-[60px] hover:ring-2  duration-1000  rounded-full h-[60px] flex items-center justify-center ">
          <FaUserGraduate />
        </Link>
        <Link smooth={true} activeClass="active" spy={true} to="contact" className="cursor-pointer  text-pink-600 w-[60px] hover:ring-2 duration-1000   rounded-full h-[60px] flex items-center justify-center">
          <MdOutlineBusinessCenter />
        </Link>
        <Link smooth={true} activeClass="active" spy={true} to="skill" className="cursor-pointer w-[60px] hover:ring-2  duration-1000  rounded-full h-[60px] flex items-center justify-center ">
          <GiSkills />    
        </Link>
        <Link smooth={true} activeClass="active" spy={true} to="service" className="cursor-pointer  hover:ring-2  duration-1000  rounded-full w-[60px] h-[60px] flex items-center justify-center ">
          <FcAbout/>   
        </Link>
        <Link smooth={true} activeClass="active" spy={true} to="CT" className="cursor-pointer  hover:ring-2  duration-1000  rounded-full w-[60px] h-[60px] flex items-center justify-center ">
          <MdContactPhone/>  
        </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
