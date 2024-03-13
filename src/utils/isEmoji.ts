export const isEmoji = (text: string) => {
  const emojiRegex = /\p{Emoji}/u;
  return emojiRegex.test(text);
};
