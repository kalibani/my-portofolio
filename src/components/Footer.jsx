import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
function Footer() {
  return (
    <footer className=" bg-primary py-12 px-0 text-center text-[0.9rem] mt-28">
      <a
        href="#"
        className=" text-[2rem] font-medium mb-8 inline-flex justify-center items-center"
      >
        kautzaralibani
        <div className="w-6 h-6">
          <img src="/avatar.png" alt="avatar-footer" />
        </div>
      </a>
      <ul className="flex flex-col gap-6 tablet:flex-row tablet:justify-center tablet:gap-8 mt-0 mx-auto mb-12">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="flex justify-center gap-6 tablet:gap-4 mb-16">
        <a
          href="https://www.facebook.com/kautzaralibani"
          target="_blank"
          className=" bg-background text-[white] p-3 rounded-xl flex border-[1px] border-solid border-[transparent] hover:bg-[transparent] hover:text-background hover:border-background"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/kautzaralibani/"
          target="_blank"
          className=" bg-background text-[white] p-3 rounded-xl flex border-[1px] border-solid border-[transparent] hover:bg-[transparent] hover:text-background hover:border-background"
        >
          <FiInstagram />
        </a>
        <a
          href="https://twitter.com/kautzaralibani"
          target="_blank"
          className=" bg-background text-[white] p-3 rounded-xl flex border-[1px] border-solid border-[transparent] hover:bg-[transparent] hover:text-background hover:border-background"
        >
          <FaTwitter />
        </a>
      </div>
      <div className="mb-10 tablet:mb-16 text-background">
        <small>2023 &copy; Kautzar Alibani</small>
      </div>
    </footer>
  );
}

export default Footer;
