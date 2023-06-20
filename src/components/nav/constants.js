import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const navData = [
  {
    href: "#",
    className: "#",
    dataTooltipContent: "Home",
    icon: <AiOutlineHome alt="Home section icon" />,
  },
  {
    href: "#about",
    className: "about",
    dataTooltipContent: "About me",
    icon: <AiOutlineUser alt="About section icon" />,
  },
  {
    href: "#experience",
    className: "experience",
    dataTooltipContent: "Experience",
    icon: <BiBook alt="Experience section icon" />,
  },
  {
    href: "#services",
    className: "services",
    dataTooltipContent: "Services",
    icon: <RiServiceLine alt="Services section icon" />,
  },
  {
    href: "#contacts",
    className: "contacts",
    dataTooltipContent: "Contacts",
    icon: <BiMessageSquareDetail alt="Contacts section icon" />,
  },
];

export default navData;
