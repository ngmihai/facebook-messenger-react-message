import clsx from "clsx";
import { useState } from "react";
import ActionItems from "./ActionItems/ActionItems";
import styles from "./styles/Message.module.scss";

interface MessageProps {
  text: string;
}

const Message = ({ text }: MessageProps) => {
  const [areActionItemsVisible, setAreActionItemsVisible] = useState(true);

  const onSmileActionItemClick = () => {};

  const onReplyActionItemClick = () => {};

  const onMoreActionItemClick = () => {};

  return (
    <div
      className={styles.container}
      onMouseLeave={() => setAreActionItemsVisible(false)}
    >
      <ActionItems
        className={clsx({ [styles.hidden]: !areActionItemsVisible })}
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
