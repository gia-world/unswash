import { Photo } from "@/model/photo";
import { getPhoto } from "@/service/unsplash";
import { useQuery } from "react-query";
import PhotoItem from "./PhotoItem";
import QueryTemplete from "./QueryTemplete";

type Props = {
  photoId: string;
};

export default function LikedItem({ photoId }: Props) {
  const queryData = useQuery<Photo>(["photo", photoId], () =>
    getPhoto(photoId)
  );

  return (
    <QueryTemplete {...queryData}>
      {queryData.data && <PhotoItem photo={queryData.data} />}
    </QueryTemplete>
  );
}
