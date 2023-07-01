//portfolio images
import portfolio1 from "../assets/images/pnet.png";
import portfolio2 from "../assets/images/atlan.png";
import portfolio3 from "../assets/images/postpay.png";
import portfolio4 from "../assets/images/crowdfunding.png";
import portfolio5 from "../assets/images/opensea.png";
import portfolio6 from "../assets/images/weirdos.png";

// avatar
import Avatar from "../assets/images/andika.jpeg";
import Nobal from "../assets/images/nobal.jpeg";
import Deepak from "../assets/images/deepak.jpeg";
import Andryan from "../assets/images/Andryan.jpeg";

// icons
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

export const skills = [
  {
    id: 1,
    skillType: "Frontend Development",
    listSkill: [
      {
        id: 1,
        skillName: "HTML",
        skillExpertise: "Experienced",
      },
      {
        id: 2,
        skillName: "CSS/SCSS/SASS",
        skillExpertise: "Experienced",
      },
      {
        id: 3,
        skillName: "Javascript",
        skillExpertise: "Experienced",
      },
      {
        id: 4,
        skillName: "Tailwind CSS",
        skillExpertise: "Experienced",
      },
      {
        id: 5,
        skillName: "React - Redux",
        skillExpertise: "Experienced",
      },
      {
        id: 6,
        skillName: "Vue - Vuex/Pinia",
        skillExpertise: "Experienced",
      },
      {
        id: 7,
        skillName: "React Native",
        skillExpertise: "Intermediate",
      },
      {
        id: 8,
        skillName: "Typescript",
        skillExpertise: "Intermediate",
      },
    ],
  },
  {
    id: 2,
    skillType: "WEB 3.0 Development",
    listSkill: [
      {
        id: 1,
        skillName: "Solidity",
        skillExpertise: "Intermediate",
      },
      {
        id: 2,
        skillName: "Thirdweb SDK",
        skillExpertise: "Experienced",
      },
      {
        id: 3,
        skillName: "Ether JS",
        skillExpertise: "Experienced",
      },
      {
        id: 4,
        skillName: "Hardhat",
        skillExpertise: "Intermediate",
      },
      {
        id: 5,
        skillName: "NFTs",
        skillExpertise: "Intermediate",
      },
      {
        id: 6,
        skillName: "Blockchain",
        skillExpertise: "Intermediate",
      },
      {
        id: 7,
        skillName: "Ethereum",
        skillExpertise: "Intermediate",
      },
      {
        id: 8,
        skillName: "Metamask",
        skillExpertise: "Intermediate",
      },
    ],
  },
];

export const portfolios = [
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

export const testimonials = [
  {
    id: 1,
    avatar: Avatar,
    name: "Andika - Unit Head Digital Channel at PermataBank",
    linkedInProfile:
      "https://www.linkedin.com/in/andika-kurnia-pandegirot-02864b22/",
    testimonial: `I have had the pleasure of working with Kautzar and I must say, his work is truly unbelievable. From start to finish, he demonstrated an exceptional level of expertise and dedication. His attention to detail and creativity are unparalleled, resulting in outstanding outcomes for our projects. Kautzar's work surpassed all expectations, leaving us in awe of his talent and ability to bring ideas to life.`,
  },
  {
    id: 2,
    avatar: Nobal,
    name: "Nobal Mohan - Director of Engineering at Atlan",
    linkedInProfile: "https://www.linkedin.com/in/nobal-mohan/",
    testimonial: `Kautzar's attention to detail, dedication, and passion shine through in every project he undertake. His expertise and skill set are unmatched, making him a valuable asset to FE team in our organization. I have witnessed firsthand how Kautzar's contributions have positively impacted the success of various projects. If you are looking for someone who consistently delivers outstanding results, look no further than Kautzar`,
  },
  {
    id: 3,
    avatar: Deepak,
    name: "Deepak Malhotra - Co-Founder at Brick",
    linkedInProfile: "https://www.linkedin.com/in/deepak--malhotra",
    testimonial: `Every project he takes on is executed with an exceptional level of skill and precision. His attention to detail is unparalleled, ensuring that every aspect of his work is flawless. His professionalism and dedication to delivering results make him a top choice for any project. If you're looking for someone who consistently produces outstanding work, look no further than Kautzar`,
  },
  {
    id: 4,
    avatar: Andryan,
    name: "Andryan Pramana - Manager Digital Solution at Infosys",
    linkedInProfile: "https://www.linkedin.com/in/andryanpramana",
    testimonial: `I am beyond impressed with Kautzar's skills. He possess a unique talent that sets them apart from others in his field. Kautzar's dedication and expertise shine through in everything he do, leaving me in awe of his abilities. It has been a privilege to witness firsthand the impact that Kautzar's skills have had on our project. His contributions have been invaluable, and I am grateful to have him as part of our team`,
  },
];