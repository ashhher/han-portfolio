import { Contact } from "@/types";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export const owner: string = "Han Xiao";

export const contacts: Contact[] = [
  {
    name: "Email",
    href: "mailto:asher.han.xiao@gmail.com",
    icon: faEnvelope,
    className: "hover:bg-yellow-700",
  },

  {
    name: "LinedIn",
    href: "https://www.linkedin.com/in/han-xiao-036017196/",
    icon: faLinkedin,
    className: "hover:bg-blue-900",
  },
  {
    name: "Github",
    href: "https://github.com/ashhher",
    icon: faGithub,
    className: "hover:bg-gray-800/90",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/_x__h______/",
    icon: faInstagram,
    className: "hover:bg-pink-700",
  },
];
