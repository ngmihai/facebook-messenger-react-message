import clsx from "clsx";

import styles from "./styles/EmojiReaction.module.scss";

export interface EmojiReactionProps {
  src: string;
  alt: string;
  active?: boolean;
  className?: string;
  onClick?: () => void;
}

const EmojiReaction = ({
  src,
  alt,
  className,
  active = false,
  onClick,
}: EmojiReactionProps) => {
  return (
    <div
      className={clsx(styles.emojiContainer, className, {
        [styles.active]: active,
      })}
    >
      <img src={src} alt={alt} onClick={onClick} />
    </div>
  );
};

export default EmojiReaction;
