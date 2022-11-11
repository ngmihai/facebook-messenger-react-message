import useOutsideClick from "src/hooks/useOutsideclick";

import EmojiReaction from "./EmojiReaction/EmojiReaction";
import { EmojiReactionsData } from "./constants";
import styles from "./styles/EmojiReactions.module.scss";

interface EmojiReactionsProps {
  activeEmoji: string | null;
  setActiveEmoji: (activeEmoji: string | null) => void;
  onClose: () => void;
}

const EmojiReactions = ({
  activeEmoji,
  setActiveEmoji,
  onClose,
}: EmojiReactionsProps) => {
  const containerRef = useOutsideClick<HTMLDivElement>(onClose);

  const onSelectEmoji = (newEmoji: string) => {
    if (newEmoji === activeEmoji) {
      setActiveEmoji(null);
    } else {
      setActiveEmoji(newEmoji);
    }

    onClose();
  };

  return (
    <div ref={containerRef} className={styles.container}>
      {EmojiReactionsData.map((emojiReactionData) => (
        <EmojiReaction
          src={emojiReactionData.src}
          alt={emojiReactionData.alt}
          key={emojiReactionData.src}
          active={activeEmoji === emojiReactionData.src}
          onClick={() => onSelectEmoji(emojiReactionData.src)}
        />
      ))}
    </div>
  );
};

export default EmojiReactions;
