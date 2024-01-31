export type LikePhoto = {
  isLiked: boolean;
  photoId: string;
};
export type LikePhotoState = LikePhoto[];

export type LikePhotoAction = {
  type: "TOGGLE_LIKE";
  payload: string;
};
