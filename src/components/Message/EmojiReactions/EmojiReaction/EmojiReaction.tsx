import clsx from "clsx";

import styles from "./styles/EmojiReaction.module.scss";

export interface EmojiReactionProps {
  src: string;
  alt: string;
  active?: boolean;
  onClick: () => void;
}

const EmojiReaction = ({
  src,
  alt,
  active = false,
  onClick,
}: EmojiReactionProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className={clsx(styles.emoji, {
        [styles.active]: active,
      })}
      onClick={onClick}
    />
  );
};

export default EmojiReaction;
