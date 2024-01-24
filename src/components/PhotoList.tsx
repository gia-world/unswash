import { ApiResponse } from "unsplash-js/dist/helpers/response";
import { Photos } from "unsplash-js/dist/methods/search/types/response";
import PhotoItem from "./PhotoItem";

type Props = {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  error: unknown;
  photos: ApiResponse<Photos> | undefined;
};

export default function PhotoList({
  error,
  isError,
  isLoading,
  isSuccess,
  photos,
}: Props) {
  if (isLoading) {
    <section>loading...</section>;
  }
  if (isError) {
    return (
      <section>
        <div>error</div>
      </section>
    );
  }
  if (isSuccess && photos?.response) {
    if (photos.response.total == 0) {
      return (
        <section>
          <p>검색 결과가 없습니다.</p>
        </section>
      );
    } else {
      return (
        <section>
          <ul className="grid grid-cols-3 gap-4 px-8 py-4">
            {photos.response.results.map((photo) => (
              <li key={photo.id}>
                <PhotoItem photo={photo} />
              </li>
            ))}
          </ul>
        </section>
      );
    }
  }
}
