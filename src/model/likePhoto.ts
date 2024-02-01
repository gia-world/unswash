export type LikePhoto = {
  isLiked: boolean;
  photoId: string;
};
export type LikePhotoState = string[];

export type LikePhotoAction = {
  type: "TOGGLE_LIKE";
  payload: string;
};
