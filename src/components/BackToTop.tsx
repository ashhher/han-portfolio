import { AnimatePresence, motion } from "framer-motion";
import { ChevronUp } from "lucide-react";
import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components";
import { useIsAtTop } from "@/hooks";
import { scrollToTop } from "@/utils";

const BackToTop = () => {
  const isAtTop = useIsAtTop();

  const hiddenState = {
    y: 100,
    opacity: 0,
  };

  const displayState = {
    y: 0,
    opacity: 1,
  };

  return (
    <AnimatePresence>
      {!isAtTop && (
        <motion.div
          initial={hiddenState}
          exit={hiddenState}
          animate={displayState}
          className="fixed bottom-5 right-5"
        >
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={scrollToTop}
                  className="h-11 w-11 rounded-full p-0"
                  aria-label="Press to return to top"
                >
                  <ChevronUp />
                </Button>
              </TooltipTrigger>
              <TooltipContent sideOffset={6}>
                <p>Return</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
