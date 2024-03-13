import { Link } from "react-router-dom";
import { owner } from "@/configs";
import { Section } from "@/types";

const sections: Section[] = [
  {
    name: "About",
    value: "about",
  },
  {
    name: "Skills",
    value: "skills",
  },
  {
    name: "Contact",
    value: "contact",
  },
];

export default function Header() {
  return (
    <nav className="w-full flex justify-center select-none font-light pt-6 md:px-28 md:pb-2">
      <div className="container flex flex-col items-center justify-between md:flex-row">
        <div className="text-5xl drop-shadow-2xl font-goldenSignature">
          <Link to="/">{owner}</Link>
        </div>
        <div className="nav-links flex gap-x-8 text-xs md:text-base">
          {sections.map((section) => (
            <span
              key={section.value}
              className="cursor-pointer"
              onClick={() => {
                document
                  .getElementById(section.value)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {section.name}
            </span>
          ))}
        </div>
      </div>
    </nav>
  );
}
