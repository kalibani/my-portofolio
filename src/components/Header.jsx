import React from "react";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import ME from "../assets/images/me.png";

function Header() {
  return (
    <header className="h-screen flex justify-center tablet:h-[68vh] laptop:h-screen pt-28 overflow-hidden text-center">
      <div className="container h-full relative">
        <h5>Hello I'm</h5>
        <h1>Kautzar Ali Bani</h1>
        <h5 className="text-custom-light ">Frontend Engineer</h5>
        <CTA />
        <HeaderSocials />

        <div className=" bg-gradient-to-br from-primary to-[transparent] w-80 h-[30rem] absolute left-[calc(50%-10rem)] tablet:left-[calc(50%-11rem)] mt-16 rounded-t-[12rem] rounded-b-[0] overflow-hidden pt-20 px-6 pb-6">
          <img src={ME} alt="me" />
        </div>

        <a
          href="#contact"
          className="hidden tablet:block tablet:absolute -right-9 bottom-20 rotate-90"
        >
          Scroll down
        </a>
      </div>
    </header>
  );
}

export default Header;
