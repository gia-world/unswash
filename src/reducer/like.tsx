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
      const existingPhoto = prevState.find((item) => item.photoId === photoId);

      if (existingPhoto) {
        // 이미 존재하는 경우, 해당 요소의 isLiked를 토글
        return prevState.map((item) =>
          item.photoId === photoId ? { ...item, isLiked: !item.isLiked } : item
        );
      } else {
        // 존재하지 않는 경우, 새로운 요소 추가
        return [...prevState, { photoId, isLiked: true }];
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

// const useLikePhotoReducer = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const toggleLike = (photoId: string) => {
//     dispatch({ type: TOGGLE_LIKE, payload: photoId });
//   };

//   return { ...state, toggleLike };
// };

// export default useLikePhotoReducer;
