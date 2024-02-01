import { LikePhotoAction, LikePhotoState } from "@/model/likePhoto";

// 액션 타입
const TOGGLE_LIKE = "TOGGLE_LIKE";

export const likePhotoReducer = (
  prevState: LikePhotoState,
  action: LikePhotoAction
): LikePhotoState => {
  switch (action.type) {
    case TOGGLE_LIKE:
      const photoId = action.payload;
      const existingPhoto = prevState.find((item) => item === photoId);

      if (existingPhoto) {
        return prevState.filter((item) => item !== photoId);
      } else {
        return [...prevState, photoId];
      }
    default:
      return prevState;
  }
};

// 초기 상태 정의
export const initialState: LikePhotoState = [];

// 디스패치 액션 정의
export const toggleLikeAction = (photoId: string): LikePhotoAction => ({
  type: TOGGLE_LIKE,
  payload: photoId,
});
