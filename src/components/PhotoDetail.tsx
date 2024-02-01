import { useLikePhotoContext } from "@/context/LikePhotoContext";
import { Photo } from "@/model/photo";
import { toggleLikeAction } from "@/reducer/like";
import { getPhoto } from "@/service/unsplash";
import { parseDate } from "@/util/date";
import Image from "next/image";
import { useQuery } from "react-query";
import QueryTemplete from "./QueryTemplete";
import ToggleLikeButton from "./ui/ToggleLikeButton";

type Props = {
  photoId: string;
};

export default function PhotoDetail({ photoId }: Props) {
  const queryData = useQuery<Photo>(["photo", photoId], () =>
    getPhoto(photoId)
  );

  const photoData = queryData.data;

  const { state, dispatch } = useLikePhotoContext();

  // photoId와 일치하는 요소가 state에 존재하는지 확인
  const isLiked = !!state.find((item) => item === photoId);

  const handleLike = () => {
    dispatch(toggleLikeAction(photoId));
  };

  return (
    <QueryTemplete queryResult={queryData}>
      {photoData ? (
        <div className="flex flex-col h-full">
          <div className="flex justify-between p-4 ml-8">
            <p className="font-bold">
              {photoData.user.first_name} {photoData.user.last_name}
            </p>
            <ToggleLikeButton isLiked={isLiked} onClick={handleLike} />
          </div>
          <div className="flex-1">
            <div className="relative h-full">
              <Image
                src={photoData.urls.regular}
                alt={photoData.alt_description || ""}
                fill
                sizes="150px"
                className="object-contain"
              />
            </div>
          </div>
          <div className="flex gap-6 p-4">
            <dl className="text-sm">
              <dt className="text-neutral-600 font-bold">이미지 크기</dt>
              <dd>{`${photoData.width}px * ${photoData.height}px`}</dd>
            </dl>
            <dl className="text-sm">
              <dt className="text-neutral-600 font-bold">업로드</dt>
              <dd>{parseDate(photoData.updated_at)}</dd>
            </dl>
            <dl className="text-sm">
              <dt className="text-neutral-600 font-bold">다운로드 수</dt>
              <dd>{photoData.downloads}</dd>
            </dl>
          </div>
          <ul className="flex gap-3 px-4 pb-4">
            {photoData.tags_preview.map((tag) => (
              <li
                key={tag.title}
                className="rounded-sm bg-neutral-200 text-neutral-600 px-2"
              >
                {tag.title}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </QueryTemplete>
  );
}
