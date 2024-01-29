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
      <section className="bg-slate-400 py-12">
        <div className="w-[80%] mx-auto">
          <div className="text-white mb-6">
            <h2 className="text-3xl font-bold mb-3">Will Photo</h2>
            <p className="leading-7">
              인터넷의 시각 자료 출처입니다.
              <br />
              모든 지역에 있는 크리에이터들의 지원을 받습니다.
            </p>
          </div>
          <SearchForm onSubmit={handleSubmit} />
        </div>
      </section>
      <section className="bg-slate-200 p-12 flex-1">
        {keyword && (
          <PhotoList
            isLoading={isLoading}
            isError={isError}
            isSuccess={isSuccess}
            error={error}
            photos={photosData}
          />
        )}
      </section>
    </>
  );
}
