import clsx from "clsx";
import { useState } from "react";
import ActionItems from "./ActionItems/ActionItems";
import styles from "./styles/Message.module.scss";

interface MessageProps {
  text: string;
}

const Message = ({ text }: MessageProps) => {
  const [areActionItemsVisible, setAreActionItemsVisible] = useState(true);
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
    <div className={styles.container} onMouseLeave={onClose}>
      <ActionItems
        className={clsx({ [styles.hidden]: !areActionItemsVisible })}
        activeEmoji={activeEmoji}
        setActiveEmoji={setActiveEmoji}
        areEmojiReactionsVisible={areEmojiReactionsVisible}
        onSmileActionItemClick={onSmileActionItemClick}
        onReplyActionItemClick={onReplyActionItemClick}
        onMoreActionItemClick={onMoreActionItemClick}
      />
      <div
        className={styles.messageContainer}
        onMouseEnter={() => setAreActionItemsVisible(true)}
      >
        <span>{text}</span>
      </div>
    </div>
  );
};

export default Message;
