import HeartImage from "src/assets/heart.png";
import LaughImage from "src/assets/laugh.png";
import WowImage from "src/assets/wow.png";
import AngryImage from "src/assets/angry.png";
import ThumbsupImage from "src/assets/thumbsup.png";

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
