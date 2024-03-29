import { Link } from "react-router-dom";
import { cx } from "class-variance-authority";
import { owner } from "@/configs";
import { Section } from "@/types";
import { useIsAtTop } from "@/hooks";
import { scrollToTop } from "@/utils";

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
  const isAtTop = useIsAtTop();

  return (
    <nav
      className={cx(
        !isAtTop && "shadow-md bg-white/50 backdrop-blur-sm",
        "w-full flex justify-center select-none font-light py-2 md:px-28 md:py-5 sticky top-0 z-10 bg-transparent transition-all duration-500"
      )}
    >
      <div className="container flex flex-col items-center justify-between md:flex-row">
        <div className="text-5xl drop-shadow-2xl font-goldenSignature">
          <Link to="/" onClick={scrollToTop}>
            {owner}
          </Link>
        </div>
        <div className="nav-links flex gap-x-8 text-base">
          {sections.map((section) => (
            <span
              key={section.value}
              className="cursor-pointer"
              onClick={() => {
                document
                  .getElementById(section.value)
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
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
