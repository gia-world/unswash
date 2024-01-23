import { ApiResponse } from "unsplash-js/dist/helpers/response";
import { Photos } from "unsplash-js/dist/methods/search/types/response";
import SearchItem from "./SearchItem";

type Props = {
  isLoading: boolean;
  data: ApiResponse<Photos> | null;
};

export default function SearchList({ isLoading, data }: Props) {
  if (!data) return;

  if (isLoading) {
    <section>loading...</section>;
  } else if (data.errors) {
    return (
      <section>
        <div>{data.errors[0]}</div>
      </section>
    );
  } else {
    return (
      <section>
        <ul>
          {data.response.results.map((photo) => (
            <li key={photo.id}>
              <SearchItem photo={photo} />
            </li>
          ))}
        </ul>
      </section>
    );
  }
}
