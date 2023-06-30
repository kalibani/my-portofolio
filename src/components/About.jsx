import React from "react";
import { FaAward, FaCode } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

import ME from "../assets/images/me-about.png";

function About() {
  return (
    <section id="about">
      <h5 className="pt-4">Get To Know</h5>
      <h2>About Me</h2>

      <div className="container grid laptop:grid-cols-[35%,50%] laptop:gap-[15%] tablet:grid-cols-[1fr] tablet:gap-0 tablet:m-auto">
        <div className="w-[65%] mt-[0] mx-auto mb-12 tablet:w-1/2 tablet:mt-8 tablet:mx-auto tablet:mb-16 laptop:w-full laptop:mt-0 aspect-square rounded-[2rem] bg-gradient-to-tr from-[transparent] via-primary to-[transparent] grid place-items-center">
          <div className="rounded-[2rem] overflow-hidden rotate-[10deg] h-[18rem] tablet:h-80 laptop:h-96 transition delay-150 duration-300 ease-in-out hover:rotate-0">
            <img src={ME} alt="about-me" />
          </div>
        </div>

        <div className="text-center relative left-5 laptop:block">
          <div className="grid grid-cols-[1fr,1fr] gap-4 tablet:grid-cols-3 tablet:gap-6">
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

          <p className="text-sm my-6 mx-0 text-custom-light tablet:m-[1rem,0,1.5rem] laptop:mt-8 laptop:mb-10 laptop:mx-0">
            HI, I'm from Indonesia and currently working for an international
            fintech company based in Dubai. I have 5 years experience as a
            frontend software engineer. My skills include, but are not limited
            to: React-React Native-Redux, Vue-Vuex, Web 3.0 Methodologies,
            Node.js and have experience in web & mobile hybrid development. I am
            a perseverance programmer, love to learn, explore and implement new
            tech. Also, have a good communication between the team and
            stakeholders.
          </p>

          <a href="#contact" className="btn btn-primary laptop:float-left">
            Hire Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
