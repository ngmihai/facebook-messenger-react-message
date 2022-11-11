import clsx from "clsx";
import { useState } from "react";
import ActionItems from "./ActionItems/ActionItems";
import EmojiReaction from "./EmojiReactions/EmojiReaction/EmojiReaction";
import styles from "./styles/Message.module.scss";

interface MessageProps {
  text: string;
}

const Message = ({ text }: MessageProps) => {
  const [areActionItemsVisible, setAreActionItemsVisible] = useState(false);
  const [areEmojiReactionsVisible, setAreEmojiReactionsVisible] =
    useState(false);
  const [activeEmoji, setActiveEmoji] = useState<string | null>(null);

  const onSmileActionItemClick = (open: boolean) => {
    setAreEmojiReactionsVisible(open);

    if (!open) {
      setAreActionItemsVisible(false);
    }
  };

  const onReplyActionItemClick = () => {};

  const onMoreActionItemClick = () => {};

  const onClose = () => {
    if (areEmojiReactionsVisible) {
      return;
    }

    setAreActionItemsVisible(false);
  };

  return (
    <div
      className={clsx(styles.container, {
        [styles.activeEmojiSpacer]: !!activeEmoji,
      })}
      onMouseLeave={onClose}
    >
      <ActionItems
        className={clsx({ [styles.hidden]: !areActionItemsVisible })}
        activeEmoji={activeEmoji}
        setActiveEmoji={setActiveEmoji}
        areEmojiReactionsVisible={areEmojiReactionsVisible}
        onSmileActionItemClick={onSmileActionItemClick}
        onReplyActionItemClick={onReplyActionItemClick}
        onMoreActionItemClick={onMoreActionItemClick}
      />
      <div className={styles.anchor}>
        <div
          className={styles.messageContainer}
          onMouseEnter={() => setAreActionItemsVisible(true)}
        >
          {text}
        </div>
        {activeEmoji && (
          <div className={styles.activeEmojiContainer}>
            <EmojiReaction
              src={activeEmoji}
              alt="active-emoji"
              className={styles.activeEmoji}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Message;
