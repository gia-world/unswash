import { Photo, Photos } from "@/model/photo";
import { ReactNode } from "react";
import { UseQueryResult } from "react-query";

type Props = UseQueryResult<Photo | Photos, unknown> & {
  data: Photo | Photos | undefined;
  children: ReactNode;
};

export default function QueryTemplete({
  isLoading,
  isError,
  isSuccess,
  error,
  data,
  children,
}: Props) {
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
  if (isSuccess && data) {
    return <>{children}</>;
  }
}
