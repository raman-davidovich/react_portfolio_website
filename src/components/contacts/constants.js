import { MdOutlineEmail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { SlCallOut } from "react-icons/sl";

const contactsInfo = {
  contacts: [
    {
      icon: (
        <MdOutlineEmail alt="Envelope icon" className="contacts__option-icon" />
      ),
      title: "Email",
      content: "raman.davidovich@gmail.com",
      href: "mailto:raman.davidovich@gmail.com",
      action: "Send a message",
    },
    {
      icon: (
        <FaTelegramPlane
          alt="Telegram icon"
          className="contacts__option-icon"
        />
      ),
      title: "Telegram",
      content: "Raman Davidovich",
      href: "https://telegram.me/Raman_Davidovich",
      action: "Send a message",
    },
    {
      icon: <SlCallOut alt="Call out icon" className="contacts__option-icon" />,
      title: "Phone Call",
      content: "+375(29) 328-47-97",
      href: "tel:+375293284797",
      action: "Make a call",
    },
  ],
  form: [
    {
      id: "name",
      placeholder: "Your Full Name",
      type: "text",
    },
    {
      id: "email",
      placeholder: "Your Email",
      type: "email",
    },
    {
      id: "message",
      placeholder: "Your Message",
      component: "textarea",
      rows: "7",
    },
  ],
};

export default contactsInfo;
