export type Photo = {
  id: string;
  alt_description: string;
  //   blur_hash: string;
  //   color: string;
  //   description: string;
  height: number;
  likes: number;
  //   links: {
  //     self: string;
  //     html: string;
  //     download: string;
  //     download_location: string;
  //   };
  //   promoted_at: string;
  width: number;
  urls: {
    full: string;
    raw: string;
    regular: string;
    small: string;
    thumb: string;
  };
  user: { first_name: string; last_name: string };
  updated_at: string;
  downloads: number;
  tags_preview: {
    type: string;
    title: string;
  }[];
};

export type Photos = {
  results: Photo[];
  total: number;
  total_pages: number;
};
