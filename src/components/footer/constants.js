import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const footerData = {
  info: [
    {
      href: "#",
      content: "Home",
    },
    {
      href: "#about",
      content: "About",
    },
    {
      href: "#experience",
      content: "Experience",
    },
    {
      href: "#certifications",
      content: "Licences & certifications",
    },
    {
      href: "#services",
      content: "Services",
    },
    {
      href: "#portfolio",
      content: "Portfolio",
    },
    {
      href: "#testimonials",
      content: "Testimonials",
    },
    {
      href: "#contacts",
      content: "Contacts",
    },
  ],
  socials: [
    {
      href: "https://www.facebook.com/roman.davidovich.9/",
      dataTooltipContent: "Facebook",
      icon: <FaFacebookF alt="Facebook icon" />,
    },
    {
      href: "https://www.instagram.com/gryzzlycruise/",
      dataTooltipContent: "Instagram",
      icon: <FiInstagram alt="Instagram icon" />,
    },
    {
      href: "https://twitter.com/RoDavidovich",
      dataTooltipContent: "Twitter",
      icon: <IoLogoTwitter alt="Twitter icon" />,
    },
  ],
};

export default footerData;
