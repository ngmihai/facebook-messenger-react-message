import ReactDOM from "react-dom";

import EmojiReaction from "./EmojiReaction/EmojiReaction";
import { EmojiReactionsData } from "./constants";
import styles from "./styles/EmojiReactions.module.scss";

interface BackdropProps {
  onClick: () => void;
}

const Backdrop = ({ onClick }: BackdropProps) => {
  return <div className={styles.backdrop} onClick={onClick} />;
};

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
  const onEmojiChange = (newEmoji: string) => {
    if (newEmoji === activeEmoji) {
      setActiveEmoji(null);
    } else {
      setActiveEmoji(newEmoji);
    }

    onClose();
  };

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={onClose} />,
        document.getElementById("backdrop")!
      )}
      <div className={styles.container}>
        {EmojiReactionsData.map((emojiReactionData) => (
          <EmojiReaction
            src={emojiReactionData.src}
            alt={emojiReactionData.alt}
            key={emojiReactionData.src}
            active={activeEmoji === emojiReactionData.src}
            onClick={() => onEmojiChange(emojiReactionData.src)}
          />
        ))}
      </div>
    </>
  );
};

export default EmojiReactions;
