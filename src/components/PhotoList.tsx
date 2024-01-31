import { Photos } from "@/model/photo";
import { UseQueryResult } from "react-query";
import PhotoItem from "./PhotoItem";
import QueryTemplete from "./QueryTemplete";

type Props = {
  queryData: UseQueryResult<Photos, unknown>;
};

export default function PhotoList({ queryData }: Props) {
  const photos = queryData.data;
  return (
    <QueryTemplete {...queryData}>
      {photos &&
        (photos.total === 0 ? (
          <p className="text-center">검색 결과가 없습니다.</p>
        ) : (
          <div>
            <ul className="grid grid-cols-3 gap-4">
              {photos.results.map((photo) => (
                <li key={photo.id}>
                  <PhotoItem photo={photo} />
                </li>
              ))}
            </ul>
          </div>
        ))}
    </QueryTemplete>
  );
}
