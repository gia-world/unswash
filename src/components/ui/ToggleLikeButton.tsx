import HeartFillIcon from "./icons/HeartFillIcon";
import HeartIcon from "./icons/HeartIcon";

type Props = {
  className?: string;
  isLiked: boolean;
  onClick: () => void;
};

export default function ToggleLikeButton({
  className,
  isLiked,
  onClick,
}: Props) {
  return (
    <button className={className} onClick={() => onClick()}>
      {isLiked ? <HeartFillIcon /> : <HeartIcon />}
    </button>
  );
}
