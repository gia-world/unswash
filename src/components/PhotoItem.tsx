import { useLikePhotoContext } from "@/context/LikePhotoContext";
import { Photo } from "@/model/photo";
import { toggleLikeAction } from "@/reducer/like";
import Image from "next/image";
import { useState } from "react";
import PhotoDetail from "./PhotoDetail";
import PhotoModal from "./PhotoModal";
import ModalPortal from "./ui/ModalPortal";
import ToggleLikeButton from "./ui/ToggleLikeButton";

type Props = {
  photo: Photo;
};

export default function PhotoItem({ photo }: Props) {
  const { id, urls, alt_description } = photo;
  const [openModal, setOpenModal] = useState(false);

  const { state, dispatch } = useLikePhotoContext();
  const isLiked = state.some(
    (item) => item.photoId === id && item.isLiked === true
  );
  // photoId와 일치하는 요소가 state에 존재하는지 확인

  const handleLike = () => {
    dispatch(toggleLikeAction(id));
  };

  return (
    <div className="relative aspect-square">
      <Image
        src={urls.thumb}
        alt={alt_description || ""}
        fill
        sizes="150px"
        onClick={() => setOpenModal(true)}
        className="object-cover"
      />
      <ToggleLikeButton
        isLiked={isLiked}
        onClick={handleLike}
        className="absolute right-2 bottom-2"
      />

      {openModal && (
        <ModalPortal>
          <PhotoModal onClose={() => setOpenModal(false)}>
            <PhotoDetail photoId={id} />
          </PhotoModal>
        </ModalPortal>
      )}
    </div>
  );
}
