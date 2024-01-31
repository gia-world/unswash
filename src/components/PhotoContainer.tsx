"use client";

import SearchForm from "@/components/SearchForm";
import { Photos } from "@/model/photo";
import { getPhotos } from "@/service/unsplash";
import { FormEvent, useEffect, useState } from "react";
import { useQuery } from "react-query";
import Pagination from "./Pagination";
import PhotoList from "./PhotoList";

export default function PhotoContainer() {
  const [keyword, setKeyword] = useState("");
  const [currentPage, setcurrentPage] = useState(1);

  // const {
  //   data: photosData,
  //   error,
  //   isError,
  //   isLoading,
  //   isSuccess,
  //   refetch,
  // } = useQuery(["photos", keyword], () => getPhotos(keyword, currentPage), {
  //   enabled: !!keyword, // 쿼리 실행 조건
  // });

  const queryData = useQuery<Photos>(
    ["photos", keyword],
    () => getPhotos(keyword, currentPage),
    {
      enabled: !!keyword, // 쿼리 실행 조건
    }
  );

  const photosData = queryData.data;

  const handleSubmit = (e: FormEvent, text: string) => {
    e.preventDefault();
    setKeyword(text);
    setcurrentPage(1); //키워드가 바뀔때 페이지네이션도 초기화
  };

  const handlePage = (page: number) => {
    setcurrentPage(page);
  };

  useEffect(() => {
    // currentPage 가 변경될 때마다 refetch
    queryData.refetch();
  }, [currentPage, queryData]);

  return (
    <>
      <section className="bg-slate-400 py-12">
        <div className="w-[80%] mx-auto">
          <div className="text-white mb-6">
            <h2 className="text-3xl font-bold mb-3">Unswash</h2>
            <p className="leading-7">
              인터넷의 시각 자료 출처입니다.
              <br />
              모든 지역에 있는 크리에이터들의 지원을 받습니다.
            </p>
          </div>
          <SearchForm onSubmit={handleSubmit} />
        </div>
      </section>
      <section className="p-12 flex-1">
        {keyword && <PhotoList queryData={queryData} />}
        {photosData && (
          <Pagination
            totalPages={photosData.total_pages}
            currentPage={currentPage}
            onChange={handlePage}
          />
        )}
      </section>
    </>
  );
}
