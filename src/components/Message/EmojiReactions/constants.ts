import HeartImage from "../../../assets/heart.png";
import LaughImage from "../../../assets/laugh.png";
import WowImage from "../../../assets/wow.png";
import AngryImage from "../../../assets/angry.png";
import ThumbsupImage from "../../../assets/thumbsup.png";

import { EmojiReactionProps } from "./EmojiReaction/EmojiReaction";

export const EmojiReactionsData: Omit<EmojiReactionProps, "onClick">[] = [
  {
    src: HeartImage,
    alt: "heart emoji reaction",
  },
  {
    src: LaughImage,
    alt: "laugh emoji reaction",
  },
  {
    src: WowImage,
    alt: "wow emoji reaction",
  },
  {
    src: AngryImage,
    alt: "angry emoji reaction",
  },
  {
    src: ThumbsupImage,
    alt: "thumbsup emoji reaction",
  },
];
