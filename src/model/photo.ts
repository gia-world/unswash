export type Photo = {
  id: string;
  alt_description: string;
  height: number;
  likes: number;
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
