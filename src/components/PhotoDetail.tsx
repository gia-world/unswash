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
    const { user, urls, alt_description } = photoData.response;
    return (
      <div>
        <div>
          <p>
            {user.first_name} {user.last_name}
          </p>
          <div>북마크</div>
        </div>
        <div className="relative aspect-square">
          <Image
            src={urls.regular}
            alt={alt_description || ""}
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
}
