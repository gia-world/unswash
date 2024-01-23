import { Photo } from "@/model/photo";
import Image from "next/image";

type Props = {
  photo: Photo;
};

export default function SearchItem({ photo }: Props) {
  const { urls, alt_description } = photo;

  return (
    <div className="relative aspect-square">
      <Image src={urls.thumb} alt={alt_description || ""} fill sizes="150px" />
    </div>
  );
}
