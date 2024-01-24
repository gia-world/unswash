import { ApiResponse } from "unsplash-js/dist/helpers/response";
import { Photos } from "unsplash-js/dist/methods/search/types/response";
import PhotoItem from "./PhotoItem";

type Props = {
  isLoading: boolean;
  photos: ApiResponse<Photos> | null;
};

export default function PhotoList({ isLoading, photos }: Props) {
  if (!photos) return;

  if (isLoading) {
    <section>loading...</section>;
  } else if (photos.errors) {
    return (
      <section>
        <div>{photos.errors[0]}</div>
      </section>
    );
  } else if (photos.response.total === 0) {
    <section>
      <p>검색 결과가 없습니다.</p>
    </section>;
  } else {
    return (
      <section>
        <ul>
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
