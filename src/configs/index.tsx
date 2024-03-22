import { Contact, SkillSet } from "@/types";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  AWSIcon,
  CSS3Icon,
  // DockerIcon,
  ExpressIcon,
  GitIcon,
  HTML5Icon,
  JavaIcon,
  JavaScriptIcon,
  MapboxIcon,
  MongoDBIcon,
  MySQLIcon,
  NextIcon,
  NodeIcon,
  PostgreSQLIcon,
  PythonIcon,
  ReactIcon,
  ReduxIcon,
  // ShadcnIcon,
  TailwindIcon,
  ThreeIcon,
  TypeScriptIcon,
  ViteIcon,
  ZustandIcon,
} from "@/assets";

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

export const skillSetList: SkillSet[] = [
  {
    name: "Languages",
    skills: [
      {
        name: "HTML5",
        icon: HTML5Icon,
      },
      {
        name: "CSS3",
        icon: CSS3Icon,
      },
      {
        name: "JavaScript",
        icon: JavaScriptIcon,
      },
      {
        name: "TypeScript",
        icon: TypeScriptIcon,
      },
      {
        name: "Python",
        icon: PythonIcon,
      },
      {
        name: "Java",
        icon: JavaIcon,
      },
    ],
  },
  {
    name: "Frontend Development",
    skills: [
      {
        name: "React",
        icon: ReactIcon,
      },
      {
        name: "Redux",
        icon: ReduxIcon,
      },
      {
        name: "Zustand",
        icon: ZustandIcon,
      },
      {
        name: "Tailwind",
        icon: TailwindIcon,
      },
      // {
      //   name: "Shadcn",
      //   icon: ShadcnIcon,
      // },
      {
        name: "Mapbox",
        icon: MapboxIcon,
      },
      {
        name: "Three.js",
        icon: ThreeIcon,
      },
      {
        name: "Vite",
        icon: ViteIcon,
      },
    ],
  },

  {
    name: "Backend Development",
    skills: [
      {
        name: "Node.js",
        icon: NodeIcon,
      },
      {
        name: "Express",
        icon: ExpressIcon,
      },
      {
        name: "Next.js",
        icon: NextIcon,
      },
    ],
  },

  {
    name: "Database",
    skills: [
      {
        name: "MongoDB",
        icon: MongoDBIcon,
      },
      {
        name: "MySQL",
        icon: MySQLIcon,
      },
      {
        name: "PostgreSQL",
        icon: PostgreSQLIcon,
      },
    ],
  },

  {
    name: "Others",
    skills: [
      {
        name: "AWS",
        icon: AWSIcon,
      },
      {
        name: "Git",
        icon: GitIcon,
      },
      // {
      //   name: "Docker",
      //   icon: DockerIcon,
      // },
    ],
  },
];
