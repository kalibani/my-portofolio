import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaTwitter } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="hidden tablet:flex tablet:flex-col tablet:items-center tablet:gap-3 tablet:absolute tablet:left-0 bottom-12 after:content-[''] after:w-[1px] after:h-8 after:bg-primary">
      <a
        href="https://www.linkedin.com/in/kautzar-alibani-04954613b/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/kalibani" target="_blank">
        <FaGithub />
      </a>
      <a href="https://twitter.com/kautzaralibani" target="_blank">
        <FaTwitter />
      </a>
    </div>
  );
};

export default HeaderSocials;
