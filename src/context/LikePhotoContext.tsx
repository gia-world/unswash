"use client";

import { LikePhotoAction, LikePhotoState } from "@/model/likePhoto";
import { initialState, likePhotoReducer } from "@/reducer/like";
import { ReactNode, createContext, useContext, useReducer } from "react";

export const LikePhotoContext = createContext<
  | {
      state: LikePhotoState;
      dispatch: React.Dispatch<LikePhotoAction>;
    }
  | undefined
>(undefined);

type Props = {
  children: ReactNode;
};

export default function LikePhotoProvider({ children }: Props) {
  const [state, dispatch] = useReducer(likePhotoReducer, initialState);

  return (
    <LikePhotoContext.Provider value={{ state, dispatch }}>
      {children}
    </LikePhotoContext.Provider>
  );
}

export const useLikePhotoContext = () => {
  const context = useContext(LikePhotoContext);
  if (!context) {
    throw new Error(
      "useLikePhotoContext must be used within a LikePhotoProvider"
    );
  }
  return context;
};
