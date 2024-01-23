"use client";

import SearchForm from "@/components/SearchForm";
import SearchList from "@/components/SearchList";
import { ChangeEvent, FormEvent, useState } from "react";
import { ApiResponse } from "unsplash-js/dist/helpers/response";
import { Photos } from "unsplash-js/dist/methods/search/types/response";

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState<ApiResponse<Photos> | null>(null);
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
    // unsplash.search
    //   .getPhotos({ query: keyword, page: 1, perPage: 10 })
    //   .then((res) => {
    //     setData(res);
    //   });
  };

  return (
    <>
      <SearchForm
        keyword={keyword}
        onChange={handleOnChange}
        onSubmit={handleSubmit}
      />
      <SearchList isLoading={isLoading} data={data} />
    </>
  );
}
