import ReactDOM from "react-dom";

import styles from "./styles/EmojiReactions.module.scss";
import EmojiReaction from "./EmojiReaction/EmojiReaction";
import { EmojiReactionsData } from "./constants";

interface BackdropProps {
  onClick: () => void;
}

const Backdrop = ({ onClick }: BackdropProps) => {
  return <div className={styles.backdrop} onClick={onClick} />;
};

interface EmojiReactionsProps {
  activeEmoji: string | null;
  setActiveEmoji: (activeEmoji: string | null) => void;
  onClickOutside: () => void;
}

const EmojiReactions = ({
  activeEmoji,
  setActiveEmoji,
  onClickOutside,
}: EmojiReactionsProps) => {
  const onEmojiChange = (newEmoji: string) => {
    if (newEmoji === activeEmoji) {
      setActiveEmoji(null);
    } else {
      setActiveEmoji(newEmoji);
    }
  };

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={onClickOutside} />,
        document.getElementById("backdrop")!
      )}
      <div className={styles.container}>
        {EmojiReactionsData.map((emojiReactionData) => (
          <EmojiReaction
            src={emojiReactionData.src}
            alt={emojiReactionData.alt}
            active={activeEmoji === emojiReactionData.src}
            onClick={() => onEmojiChange(emojiReactionData.src)}
          />
        ))}
      </div>
    </>
  );
};

export default EmojiReactions;
