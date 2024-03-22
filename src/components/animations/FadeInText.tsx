import { isEmoji } from "@/utils";
import { motion } from "framer-motion";

type Props = {
  children: string;
  delayOffset: number;
};

const FadeInText = ({ children, delayOffset = 0 }: Props) => {
  const words = children.split(" ");

  const wordsLetters = words
    .map((word) => {
      if (isEmoji(word)) return word;
      const letters = word.split("");
      letters.push("\u00A0");
      return letters;
    })
    .flat();

  return (
    <motion.div>
      {wordsLetters.map((letter, index) => (
        <motion.span
          className="inline-flex"
          key={index}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: index * 0.03 + delayOffset,
            type: "spring",
            damping: 15,
            stiffness: 400,
          }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default FadeInText;
