import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experiences">
      <h5>The Skills I have</h5>
      <h2>My Experience</h2>
      {/* class exp container */}
      <div className="container grid gap-4 tablet:grid-cols-[1fr] laptop:grid-cols-[1fr,1fr] tablet:gap-8 tablet:m-auto m-auto">
        {/* frontend */}
        <div className="bg-background-variant w-full py-8 px-4 tablet:w-[80%] laptop:w-full tablet:p-8 tablet:m-auto laptop:py-[2.4rem] laptop:px-10 rounded-[2rem] border-[1px] border-solid border-[transparent] hover:bg-[transparent] hover:border-primary-variant hover:cursor-default transition delay-150 duration-300 ease-in-out text-sm tablet:text-base">
          <h3 className="text-center mb-8 text-primary">
            Frontend Development
          </h3>
          {/* content */}
          <div className="grid grid-cols-[1fr,1fr] gap-2 tablet:gap-y-8 laptop:gap-4">
            {/* details */}
            <article className="flex gap-4">
              <BsPatchCheckFill className="mt-[6px] text-primary" />
              <div>
                <h4>HTML</h4>
                <small className="text-custom-light">Experienced</small>
              </div>
            </article>
            {/* details */}
            <article className="flex gap-4">
              <BsPatchCheckFill className="mt-[6px] text-primary" />
              <div>
                <h4>CSS/SCSS/SASS</h4>
                <small className="text-custom-light">Experienced</small>
              </div>
            </article>
            {/* details */}
            <article className="flex gap-4">
              <BsPatchCheckFill className="mt-[6px] text-primary" />
              <div>
                <h4>Javascript</h4>
                <small className="text-custom-light">Experienced</small>
              </div>
            </article>
            {/* details */}
            <article className="flex gap-4">
              <BsPatchCheckFill className="mt-[6px] text-primary" />
              <div>
                <h4>Tailwind CSS</h4>
                <small className="text-custom-light">Experienced</small>
              </div>
            </article>
            {/* details */}

            <article className="flex gap-4">
              <BsPatchCheckFill className="mt-[6px] text-primary" />
              <div>
                <h4>React - Redux</h4>
                <small className="text-custom-light">Experienced</small>
              </div>
            </article>
            {/* details */}
            <article className="flex gap-4">
              <BsPatchCheckFill className="mt-[6px] text-primary" />
              <div>
                <h4>Vue - Vuex/Pinia</h4>
                <small className="text-custom-light">Experienced</small>
              </div>
            </article>
            {/* details */}
            <article className="flex gap-4">
              <BsPatchCheckFill className="mt-[6px] text-primary" />
              <div>
                <h4>React Native</h4>
                <small className="text-custom-light">Intermediate</small>
              </div>
            </article>
            {/* details */}
            <article className="flex gap-4">
              <BsPatchCheckFill className="mt-[6px] text-primary" />
              <div>
                <h4>Typescript</h4>
                <small className="text-custom-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/* backend */}
        <div className="bg-background-variant w-full py-8 px-4 tablet:w-[80%] laptop:w-full tablet:p-8 tablet:m-auto laptop:py-[2.4rem] laptop:px-10 rounded-[2rem] border-[1px] border-solid border-[transparent] hover:bg-[transparent] hover:border-primary-variant hover:cursor-default transition delay-150 duration-300 ease-in-out text-sm tablet:text-base">
          <h3 className="text-center mb-8 text-primary">WEB 3.0 Development</h3>
          <div className="grid grid-cols-[1fr,1fr] gap-2 tablet:gap-y-8 laptop:gap-4">
            <article className="flex gap-4">
              <BsPatchCheckFill className="mt-[6px] text-primary" />
              <div>
                <h4>Solidity</h4>
                <small className="text-custom-light">Intermediate</small>
              </div>
            </article>
            {/* details */}
            <article className="flex gap-4">
              <BsPatchCheckFill className="mt-[6px] text-primary" />
              <div>
                <h4>Thirdweb SDK</h4>
                <small className="text-custom-light">Experienced</small>
              </div>
            </article>
            {/* details */}
            <article className="flex gap-4">
              <BsPatchCheckFill className="mt-[6px] text-primary" />
              <div>
                <h4>Ether JS</h4>
                <small className="text-custom-light">Experienced</small>
              </div>
            </article>
            {/* details */}
            <article className="flex gap-4">
              <BsPatchCheckFill className="mt-[6px] text-primary" />
              <div>
                <h4>Hardhat</h4>
                <small className="text-custom-light">Intermediate</small>
              </div>
            </article>
            {/* details */}
            <article className="flex gap-4">
              <BsPatchCheckFill className="mt-[6px] text-primary" />
              <div>
                <h4>NFTs</h4>
                <small className="text-custom-light">Intermediate</small>
              </div>
            </article>
            {/* details */}
            <article className="flex gap-4">
              <BsPatchCheckFill className="mt-[6px] text-primary" />
              <div>
                <h4>Blockchain</h4>
                <small className="text-custom-light">Intermediate</small>
              </div>
            </article>
            <article className="flex gap-4">
              <BsPatchCheckFill className="mt-[6px] text-primary" />
              <div>
                <h4>Ethereum</h4>
                <small className="text-custom-light">Intermediate</small>
              </div>
            </article>
            <article className="flex gap-4">
              <BsPatchCheckFill className="mt-[6px] text-primary" />
              <div>
                <h4>Metamask</h4>
                <small className="text-custom-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
