import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { contacts } from "@/configs";
import {
  Button,
  MotionList,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from ".";
import { cn } from "@/lib/utils";

type Props = {
  delayOffset?: number;
  showWhenInView?: boolean;
};

const ContactList = ({ delayOffset = 0, showWhenInView = true }: Props) => {
  return (
    <MotionList delayOffset={delayOffset} showWhenInView={showWhenInView}>
      {contacts.map((contact, index) => (
        <TooltipProvider delayDuration={0} key={index}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className={cn(
                  "h-12 w-12 md:h-15 md:w-15 flex items-center justify-center rounded-full p-3 bg-black",
                  contact.className
                )}
                asChild
                aria-label={contact.name}
              >
                <a
                  href={contact.href}
                  target="_blank"
                  aria-label={contact.name}
                >
                  <FontAwesomeIcon
                    icon={contact.icon}
                    size="lg"
                    className="w-fit"
                  />
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent sideOffset={6}>
              <p>{contact.name}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </MotionList>
  );
};

export default ContactList;
