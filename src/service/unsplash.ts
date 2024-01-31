const unsplashAccessKey = process.env.NEXT_PUBLIC_UNSPLSH_ACCESS_KEY || "";
const apiUrl = "https://api.unsplash.com";

export const getPhoto = async (photoId: string) => {
  const response = await fetch(
    `${apiUrl}/photos/${photoId}?client_id=${unsplashAccessKey}`
  );
  const data = await response.json();
  return data;
};

export const getPhotos = async (keyword: string, page = 1, perPage = 9) => {
  const response = await fetch(
    `${apiUrl}/search/photos/?client_id=${unsplashAccessKey}&query=${keyword}&page=${page}&per_page=${perPage}`
  );
  const data = await response.json();
  return data;
};
