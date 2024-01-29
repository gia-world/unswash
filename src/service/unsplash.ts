import { createApi } from "unsplash-js";

const myAccessKey: string = process.env.NEXT_PUBLIC_UNSPLSH_ACCESS_KEY || "";

export const unsplash = createApi({
  accessKey: myAccessKey,
});

export const getPhoto = async (photoId: string) => {
  const res = await unsplash.photos.get({ photoId });
  return res;
};

export const getPhotos = async (
  keyword: string,
  page?: number,
  perPage?: number
) => {
  const res = await unsplash.search.getPhotos({
    query: keyword,
    page: page ?? 1,
    perPage: perPage ?? 9,
  });
  return res;
};
