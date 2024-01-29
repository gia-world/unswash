import { getPhoto } from "@/service/unsplash";
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
  } = useQuery(["photo", photoId], () => getPhoto(photoId));

  //* 캐시 무효화 처리하기

  if (isLoading) {
    return <div>loading...</div>;
  }
  if (isError) {
    console.error("Error fetching photo data:", error);
    return <div>Error fetching photo data</div>;
  }

  if (isSuccess && photoData.response) {
    const { user, urls, alt_description, width, height, updated_at } =
      photoData.response;
    return (
      <>
        <div className="flex justify-between p-4">
          <p className="font-bold">
            {user.first_name} {user.last_name}
          </p>
          <div>북마크</div>
        </div>
        <div className="h-3/5">
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
        <div className="flex gap-5 p-4">
          <dl className="text-sm">
            <dt className="text-neutral-600 font-bold">이미지 크기</dt>
            <dd>{`${width}px * ${height}px`}</dd>
          </dl>
          <dl className="text-sm">
            <dt className="text-neutral-600 font-bold">업로드</dt>
            <dd></dd>
          </dl>
          <dl className="text-sm">
            <dt className="text-neutral-600 font-bold">다운로드</dt>
            <dd>{`${width}px * ${height}px`}</dd>
          </dl>
        </div>
        <ul className="flex gap-2"></ul>
      </>
    );
  }
}
