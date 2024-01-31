import { Photo, Photos } from "@/model/photo";
import { ReactNode } from "react";
import { UseQueryResult } from "react-query";
import LoadingSpinner from "./ui/LoadingSpinner";

type Props = {
  queryResult: UseQueryResult<Photo | Photos, unknown>;
  children: ReactNode;
};

export default function QueryTemplate({ queryResult, children }: Props) {
  const { isLoading, isError, isSuccess, error, data } = queryResult;

  if (isLoading) {
    return (
      <div className="h-full w-full flex justify-center items-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (isError) {
    console.error("Error fetching data:", error);
    return (
      <div className="h-full flex justify-center items-center">
        <span>데이터를 가져올 수 없습니다.</span>
      </div>
    );
  }

  if (isSuccess && data) {
    return <>{children}</>;
  }
}
