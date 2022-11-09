import clsx from "clsx";
import { ReactComponent as SmileActionItemIcon } from "../../../assets/smile-action-item.svg";
import { ReactComponent as ReplyActionItemIcon } from "../../../assets/reply-action-item.svg";
import { ReactComponent as MoreActionItemIcon } from "../../../assets/more-action-item.svg";

import styles from "./styles/ActionItems.module.scss";

interface ActionItemsProps {
  className?: string;
  onSmileActionItemClick: () => void;
  onReplyActionItemClick: () => void;
  onMoreActionItemClick: () => void;
}

const ActionItems = ({
  className,
  onSmileActionItemClick,
  onReplyActionItemClick,
  onMoreActionItemClick,
}: ActionItemsProps) => {
  return (
    <div className={clsx(styles.container, className)}>
      <SmileActionItemIcon
        className={styles.actionItem}
        onClick={onSmileActionItemClick}
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
