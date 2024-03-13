import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export type Section = {
  name: string;
  value: string;
};

export type Contact = {
  name: string;
  href: string;
  icon: IconDefinition;
  className: string;
};
