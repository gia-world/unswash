import { Photo } from "@/model/photo";
import { getPhoto } from "@/service/unsplash";
import { parseDate } from "@/util/date";
import Image from "next/image";
import { useQuery } from "react-query";

type Props = {
  photoId: string;
};

export default function PhotoDetail({ photoId }: Props) {
  const {
    data: photoData,
    error,
    isError,
    isLoading,
    isSuccess,
  } = useQuery<Photo>(["photo", photoId], () => getPhoto(photoId));

  if (isLoading) {
    return (
      <div className="h-full flex justify-center items-center">loading...</div>
    );
  }
  if (isError) {
    console.error("Error fetching photo data:", error);
    return (
      <div className="h-full flex justify-center items-center">
        Error fetching photo data
      </div>
    );
  }

  if (isSuccess && photoData) {
    const {
      user,
      urls,
      alt_description,
      width,
      height,
      updated_at,
      downloads,
      tags_preview,
    } = photoData;
    return (
      <div className="flex flex-col h-full">
        <div className="flex justify-between p-4 ml-8">
          <p className="font-bold">
            {user.first_name} {user.last_name}
          </p>
          <div>북마크</div>
        </div>
        <div className="flex-1">
          <div className="relative h-full">
            <Image
              src={urls.regular}
              alt={alt_description || ""}
              fill
              sizes="150px"
              className="object-contain"
            />
          </div>
        </div>
        <div className="flex gap-6 p-4">
          <dl className="text-sm">
            <dt className="text-neutral-600 font-bold">이미지 크기</dt>
            <dd>{`${width}px * ${height}px`}</dd>
          </dl>
          <dl className="text-sm">
            <dt className="text-neutral-600 font-bold">업로드</dt>
            <dd>{parseDate(updated_at)}</dd>
          </dl>
          <dl className="text-sm">
            <dt className="text-neutral-600 font-bold">다운로드 수</dt>
            <dd>{downloads}</dd>
          </dl>
        </div>
        <ul className="flex gap-3 px-4 pb-4">
          {tags_preview.map((tag) => (
            <li
              key={tag.title}
              className="rounded-sm bg-neutral-200 text-neutral-600 px-2"
            >
              {tag.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
