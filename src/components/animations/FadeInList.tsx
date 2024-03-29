import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  delayOffset?: number;
  showWhenInView?: boolean;
  className?: string;
  children: React.ReactNode[];
};

const FadeInList = ({
  delayOffset = 0,
  showWhenInView = true,
  className,
  children,
}: Props) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const ulVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3 + delayOffset,
        staggerChildren: 0.1,
      },
    },
  };

  const liVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  useEffect(() => {
    if (!showWhenInView) {
      controls.start("visible");
    }
  }, [controls, showWhenInView]);

  useEffect(() => {
    if (isInView && showWhenInView) {
      controls.start("visible");
    }
  }, [controls, isInView, showWhenInView]);

  return (
    <motion.ul
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={ulVariants}
      className={cn("flex gap-4", className)}
    >
      {children.map((child, i) => (
        <motion.li
          key={i}
          variants={liVariants}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 100,
          }}
        >
          {child}
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default FadeInList;
