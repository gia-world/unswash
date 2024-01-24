"use client";

import SearchForm from "@/components/SearchForm";
import { getPhotos } from "@/service/unsplash";
import { FormEvent, useState } from "react";
import { useQuery } from "react-query";
import PhotoList from "./PhotoList";

export default function PhotoContainer() {
  const [keyword, setKeyword] = useState("");
  const {
    data: photosData,
    error,
    isError,
    isLoading,
    isSuccess,
  } = useQuery(["photos", keyword], () => getPhotos(keyword));

  const handleSubmit = (e: FormEvent, text: string) => {
    e.preventDefault();
    setKeyword(text);
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      <PhotoList
        isLoading={isLoading}
        isError={isError}
        isSuccess={isSuccess}
        error={error}
        photos={photosData}
      />
    </>
  );
}
