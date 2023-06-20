import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const cardsInfo = [
  {
    icon: <FaAward className="about__icon" alt="Award icon" />,
    title: "Experience",
    information: "1+ Years Working",
  },
  {
    icon: <FiUsers className="about__icon" alt="People icon" />,
    title: "Clients",
    information: "0+ Worldwide",
  },
  {
    icon: (
      <VscFolderLibrary className="about__icon" alt="Folder library icon" />
    ),
    title: "Projects",
    information: "2 Completed",
  },
];

export default cardsInfo;
