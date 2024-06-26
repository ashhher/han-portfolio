import { ReactElement, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  delayOffset?: number;
  className?: string;
  children: ReactElement | string;
};

const FadeInDiv = ({ delayOffset, className, children }: Props) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start({ y: 0, opacity: 1 });
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 100, opacity: 0 }}
      animate={controls}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 200,
        delay: delayOffset,
      }}
      className={cn("relative flex items-center justify-center", className)}
    >
      {children}
    </motion.div>
  );
};

export default FadeInDiv;
