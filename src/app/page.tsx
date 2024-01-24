"use client";

import PhotoList from "@/components/PhotoList";
import SearchForm from "@/components/SearchForm";
import { unsplash } from "@/service/unsplash";
import { ChangeEvent, FormEvent, useState } from "react";
import { ApiResponse } from "unsplash-js/dist/helpers/response";
import { Photos } from "unsplash-js/dist/methods/search/types/response";

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [photos, setPhotos] = useState<ApiResponse<Photos> | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("submited");
    setIsLoading(true);
    getPhotos();
    setIsLoading(false);
    setKeyword("");
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) =>
    setKeyword(e.target.value);

  const getPhotos = () => {
    console.log("getphotos", keyword);
    unsplash.search
      .getPhotos({ query: keyword, page: 1, perPage: 10 })
      .then((res) => {
        setPhotos(res);
      });
  };

  return (
    <>
      <SearchForm
        keyword={keyword}
        onChange={handleOnChange}
        onSubmit={handleSubmit}
      />
      <PhotoList isLoading={isLoading} photos={photos} />
    </>
  );
}
