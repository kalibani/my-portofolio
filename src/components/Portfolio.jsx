import React from "react";
import portfolio1 from "../assets/images/permatanet-1.png";
import portfolio2 from "../assets/images/atlan.png";
import portfolio3 from "../assets/images/postpay.png";
import portfolio4 from "../assets/images/crowdfunding.png";
import portfolio5 from "../assets/images/opensea.png";
import portfolio6 from "../assets/images/weirdos.png";

function Portfolio() {
  const portfolios = [
    {
      id: 1,
      title: "PermataNet - Internet Banking",
      githubLink: "https://www.permatanet.com/",
      liveDemoLink:
        "https://drive.google.com/file/d/1xpWQe9LmSiax-d2_covtetdDytkooY2Q/view?usp=drive_link",
      imageLink: portfolio1,
      altImage: "portfolio1",
      isPrivate: true,
    },
    {
      id: 2,
      title: "Atlan - Third Gen Data Catalog",
      githubLink: "https://atlan.com/",
      liveDemoLink:
        "https://drive.google.com/file/d/1JhYc23oQ7wRJudu2e0zShn_pawDWVg0g/view?usp=sharing",
      imageLink: portfolio2,
      altImage: "portfolio2",
      isPrivate: true,
    },
    {
      id: 3,
      title: "Postpay - Pay Later Apps",
      githubLink: "https://www.postpay.io/",
      liveDemoLink:
        "https://drive.google.com/file/d/1A6y7Bme0ERINzmG7zBTHKO5mbEgjcsyX/view?usp=sharing",
      imageLink: portfolio3,
      altImage: "portfolio3",
      isPrivate: true,
    },
    {
      id: 4,
      title: "Crowdfunding App - Web 3.0",
      githubLink: "https://github.com/kalibani/CrowdFunding",
      liveDemoLink: "https://crowd-funding-kautzar.vercel.app/",
      imageLink: portfolio4,
      altImage: "portfolio4",
      isPrivate: false,
    },
    {
      id: 5,
      title: "OpenSea Clone - Web 3.0",
      githubLink: "https://github.com/kalibani/OpenSea-Blockchain",
      liveDemoLink: "https://open-sea-blockchain-kautzar.vercel.app/",
      imageLink: portfolio5,
      altImage: "portfolio5",
      isPrivate: false,
    },
    {
      id: 6,
      title: "The Weirdos NFT - (coming soon)",
      githubLink: "github.com",
      liveDemoLink: "github.com",
      imageLink: portfolio6,
      altImage: "portfolio6",
      isPrivate: false,
    },
  ];
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
