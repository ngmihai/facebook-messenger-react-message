import { useState } from "react";
import clsx from "clsx";

import ActionItems from "./ActionItems/ActionItems";
import EmojiReaction from "./EmojiReactions/EmojiReaction/EmojiReaction";
import styles from "./styles/Message.module.scss";

export enum MessageAlignment {
  LEFT = "left",
  RIGHT = "right",
}

interface MessageProps {
  text: string;
  align?: MessageAlignment;
}

const Message = ({ text, align = MessageAlignment.RIGHT }: MessageProps) => {
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

  const onReplyActionItemClick = () => {
    // TODO: implement reply action based on the current text
  };

  const onMoreActionItemClick = () => {
    // TODO: implement more actions
  };

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
        [styles.left]: align === MessageAlignment.LEFT,
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
          className={clsx(styles.messageContainer, {
            [styles.left]: align === MessageAlignment.LEFT,
          })}
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
