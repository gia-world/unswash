import { Photos } from "@/model/photo";
import PhotoItem from "./PhotoItem";

type Props = {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  error: unknown;
  photos: Photos | undefined;
};

export default function PhotoList({
  error,
  isError,
  isLoading,
  isSuccess,
  photos,
}: Props) {
  if (isLoading) {
    return <p className="text-center">Loading...</p>;
  }
  if (isError) {
    return <p className="text-center">An error occured.</p>;
  }
  if (isSuccess && photos) {
    if (photos.total == 0) {
      return <p className="text-center">검색 결과가 없습니다.</p>;
    } else {
      return (
        <div>
          <ul className="grid grid-cols-3 gap-4">
            {photos.results.map((photo) => (
              <li key={photo.id}>
                <PhotoItem photo={photo} />
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}
