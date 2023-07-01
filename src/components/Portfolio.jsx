import React from "react";
import { portfolios } from "../constant";

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container grid grid-cols-1 gap-4 tablet:grid-cols-[1fr,1fr] target:gap-5 laptop:grid-cols-3 laptop:gap-10 m-auto">
        {portfolios.map((portfolio) => (
          <article
            key={portfolio.id}
            className="bg-background-variant p-5 rounded-[2rem] border-[1px] border-solid border-[transparent] transition delay-150 duration-300 ease-in-out hover:border-primary-variant hover:bg-[transparent]"
          >
            <div className=" rounded-3xl overflow-hidden">
              <img src={portfolio.imageLink} alt={portfolio.altImage} />
            </div>
            <h3 className="mt-[1.2rem] mx-0 mb-8">{portfolio.title}</h3>
            <div className="flex gap-4 mb-4">
              <a href={portfolio.githubLink} className="btn" target="_blank">
                {portfolio.isPrivate ? "Explore" : "Github"}
              </a>
              <a
                href={portfolio.liveDemoLink}
                className="btn btn-primary"
                target="_blank"
              >
                Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
