import { useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

const useIsAtTop = () => {
  const { scrollY } = useScroll();

  const [isAtTop, setIsAtTop] = useState<boolean>(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest === 0) {
      setIsAtTop(true);
    } else if (isAtTop) {
      setIsAtTop(false);
    }
  });

  return isAtTop;
};

export default useIsAtTop;
