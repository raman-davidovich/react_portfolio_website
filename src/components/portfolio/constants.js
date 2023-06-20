import IMG1 from "../../assets/portfolio1.webp";

const portfolioData = [
  {
    id: 1,
    image: IMG1,
    title: "React 3D animation website (iPhone 14 presentation)",
    technologies: "ReactJS, WebGi SDK, ThreeJS, GSAP",
    links: [
      {
        href: "https://github.com/raman-davidovich/iphone-3d-website",
        className: "btn tooltip_portfolio",
        dataTooltipContent: "Visit repository",
        content: "Github",
      },
      {
        href: "https://iphoneanimation.tech/",
        className: "btn btn-primary tooltip_portfolio",
        dataTooltipContent: "Visit website",
        content: "Live Demo",
      },
    ],
  },
];

export default portfolioData;
