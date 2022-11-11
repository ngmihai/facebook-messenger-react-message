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
      className={clsx(styles.emojiContainer, {
        [styles.active]: active,
      })}
    >
      <img src={src} alt={alt} className={className} onClick={onClick} />
    </div>
  );
};

export default EmojiReaction;
