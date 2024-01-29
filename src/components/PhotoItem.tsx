import Image from "next/image";
import { useState } from "react";
import { Basic } from "unsplash-js/dist/methods/photos/types";
import PhotoDetail from "./PhotoDetail";
import PhotoModal from "./PhotoModal";
import ModalPortal from "./ui/ModalPortal";

type Props = {
  photo: Basic;
};

export default function PhotoItem({ photo }: Props) {
  const { id, urls, alt_description } = photo;
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="relative aspect-square">
      <Image
        src={urls.thumb}
        alt={alt_description || ""}
        fill
        sizes="150px"
        onClick={() => setOpenModal(true)}
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
