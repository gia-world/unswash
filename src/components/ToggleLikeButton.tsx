import { useLikePhotoContext } from "@/context/LikePhotoContext";
import { toggleLikeAction } from "@/reducer/like";
import HeartFillIcon from "./ui/icons/HeartFillIcon";
import HeartIcon from "./ui/icons/HeartIcon";

type Props = {
  photoId: string;
  className?: string;
};

export default function ToggleLikeButton({ photoId, className }: Props) {
  const { state, dispatch } = useLikePhotoContext();
  console.log(state, "liked photo");

  const isLiked = state.some(
    (item) => item.photoId === photoId && item.isLiked === true
  );
  // photoId와 일치하는 요소가 state에 존재하는지 확인

  const handleLike = () => {
    dispatch(toggleLikeAction(photoId));
  };

  return (
    <button className={className} onClick={() => handleLike()}>
      {isLiked ? <HeartFillIcon /> : <HeartIcon />}
    </button>
  );
}
