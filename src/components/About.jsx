import React from "react";
import { FaAward, FaCode } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

import ME from "../assets/images/me-about.png";

function About() {
  return (
    <section id="about">
      <h5 className="pt-4">Get To Know</h5>
      <h2>About Me</h2>

      <div className="container grid grid-cols-[35%,50%] gap-[15%]">
        <div className="w-full aspect-square rounded-[2rem] bg-gradient-to-tr from-[transparent] via-primary to-[transparent] grid place-items-center">
          <div className="rounded-[2rem] overflow-hidden rotate-[10deg] h-96 transition delay-150 duration-300 ease-in-out hover:rotate-0">
            <img src={ME} alt="about-me" />
          </div>
        </div>

        <div className="about__content">
          <div className="grid grid-cols-3 gap-6">
            <article className="bg-background-variant border-[1px] border-solid border-[transparent] rounded-2xl p-8 text-center hover:bg-[transparent] hover:border-primary hover:cursor-default">
              <FaAward className="inline-block text-primary text-xl mb-4" />
              <h5 className="text-base">Experience</h5>
              <small className="text-[0.7rem] text-custom-light">
                +5 Years
              </small>
            </article>
            <article className="bg-background-variant border-[1px] border-solid border-[transparent] rounded-2xl p-8 text-center hover:bg-[transparent] hover:border-primary hover:cursor-default">
              <FaCode className="inline-block text-primary text-xl mb-4" />
              <h5 className="text-base">Technologies</h5>
              <small className="text-[0.7rem] text-custom-light">+20</small>
            </article>
            <article className="bg-background-variant border-[1px] border-solid border-[transparent] rounded-2xl p-8 text-center hover:bg-[transparent] hover:border-primary hover:cursor-default">
              <VscFolderLibrary className="inline-block text-primary text-xl mb-4" />
              <h5 className="text-base">Projects</h5>
              <small className="text-[0.7rem] text-custom-light">
                15+ Project
              </small>
            </article>
          </div>

          <p className="text-sm mt-8 mb-10 mx-0 text-custom-light">
            HI, I'm from Indonesia and currently working for an international
            fintech company based in Dubai. I have 5 years experience as a
            frontend software engineer. My skills include, but are not limited
            to: React-React Native-Redux, Vue-Vuex, Web 3.0 Methodologies,
            Node.js and have experience in web & mobile hybrid development. I am
            a perseverance programmer, love to learn, explore and implement new
            tech. Also, have a good communication between the team and
            stakeholders.
          </p>

          <a href="#contact" className="btn btn-primary">
            Hire Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
