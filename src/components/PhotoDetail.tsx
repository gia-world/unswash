import { Photo } from "@/model/photo";
import { unsplash } from "@/service/unsplash";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ApiResponse } from "unsplash-js/dist/helpers/response";
import { Full } from "unsplash-js/dist/methods/photos/types";
type Props = {
  photoId: string;
};

export default function PhotoDetail({ photoId }: Props) {
  const [photoData, setPhotoData] = useState<ApiResponse<Full> | null>(null);
  const [photo, setPhoto] = useState<Photo>();

  const getPhoto = (id: string) => {
    unsplash.photos.get({ photoId: id }).then((res) => {
      setPhotoData(res);
      if (res.type === "success") {
        setPhoto(res.response);
      }
    });
  };

  useEffect(() => {
    getPhoto(photoId);
  }, [photoId]);

  if (!photo) return;
  return (
    <div>
      <div>
        <p>
          {photo.user.first_name} {photo.user.last_name}
        </p>
        <div>북마크</div>
      </div>
      <div className="relative aspect-square">
        <Image
          src={photo.urls.regular}
          alt={photo.alt_description || ""}
          fill
          sizes="150px"
        />
      </div>
      <dl>
        <dt>이미지 크기</dt>
        <dd></dd>
      </dl>
    </div>
  );
}
