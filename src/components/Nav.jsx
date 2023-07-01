import { useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

function Nav() {
  const [isActive, setIsActive] = useState("#");
  return (
    <nav className="bg-[rgba(0,0,0,0.3)] w-max block py-3 px-7 z-[2] fixed left-1/2 -translate-x-1/2 bottom-8 flex gap-3 rounded-[3rem] backdrop-blur-lg]">
      <a
        href="#"
        className={`bg-[transparent] p-2 rounded-[50%] flex text-custom-light text-base hover:bg-[rgba(0,0,0,0.2)] ${
          isActive === "#" ? " bg-primary text-background" : ""
        }`}
        onClick={() => setIsActive("#")}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={`bg-[transparent] p-2 rounded-[50%] flex text-custom-light text-base hover:bg-[rgba(0,0,0,0.2)] ${
          isActive === "#about" ? "bg-primary text-background" : ""
        }`}
        onClick={() => setIsActive("#about")}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experiences"
        className={`bg-[transparent] p-2 rounded-[50%] flex text-custom-light text-base hover:bg-[rgba(0,0,0,0.2)] ${
          isActive === "#experiences" ? "bg-primary text-background" : ""
        }`}
        onClick={() => setIsActive("#experiences")}
      >
        <BiBook />
      </a>
      <a
        href="#portfolio"
        className={`bg-[transparent] p-2 rounded-[50%] flex text-custom-light text-base hover:bg-[rgba(0,0,0,0.2)] ${
          isActive === "#portfolio" ? "bg-primary text-background" : ""
        }`}
        onClick={() => setIsActive("#portfolio")}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        className={`bg-[transparent] p-2 rounded-[50%] flex text-custom-light text-base hover:bg-[rgba(0,0,0,0.2)] ${
          isActive === "#contact" ? "bg-primary text-background" : ""
        }`}
        onClick={() => setIsActive("#contact")}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
}

export default Nav;
