import clsx from "clsx";
import { ReactComponent as SmileActionItemIcon } from "../../../assets/smile-action-item.svg";
import { ReactComponent as ReplyActionItemIcon } from "../../../assets/reply-action-item.svg";
import { ReactComponent as MoreActionItemIcon } from "../../../assets/more-action-item.svg";

import styles from "./styles/ActionItems.module.scss";
import EmojiReactions from "../EmojiReactions/EmojiReactions";

interface ActionItemsProps {
  className?: string;
  activeEmoji: string | null;
  setActiveEmoji: (activeEmoji: string | null) => void;
  areEmojiReactionsVisible: boolean;
  onSmileActionItemClick: (open: boolean) => void;
  onReplyActionItemClick: () => void;
  onMoreActionItemClick: () => void;
}

const ActionItems = ({
  className,
  activeEmoji,
  setActiveEmoji,
  areEmojiReactionsVisible,
  onSmileActionItemClick,
  onReplyActionItemClick,
  onMoreActionItemClick,
}: ActionItemsProps) => {
  return (
    <div className={clsx(styles.container, className)}>
      {areEmojiReactionsVisible && (
        <EmojiReactions
          activeEmoji={activeEmoji}
          setActiveEmoji={setActiveEmoji}
          onClickOutside={() => onSmileActionItemClick(false)}
        />
      )}
      <SmileActionItemIcon
        className={styles.actionItem}
        onClick={() => onSmileActionItemClick(true)}
      />
      <ReplyActionItemIcon
        className={styles.actionItem}
        onClick={onReplyActionItemClick}
      />
      <MoreActionItemIcon
        className={styles.actionItem}
        onClick={onMoreActionItemClick}
      />
    </div>
  );
};

export default ActionItems;
