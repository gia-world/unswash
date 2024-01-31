import { Photo } from "@/model/photo";
import { getPhoto } from "@/service/unsplash";
import { useQuery } from "react-query";
import PhotoItem from "./PhotoItem";

type Props = {
  photoId: string;
};

export default function LikedItem({ photoId }: Props) {
  const {
    data: photoData,
    error,
    isError,
    isLoading,
    isSuccess,
  } = useQuery<Photo>(["photo", photoId], () => getPhoto(photoId));
  console.log(photoData, "liked item");

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
    return <PhotoItem photo={photoData} />;
  }
}
