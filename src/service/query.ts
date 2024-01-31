import { likePhoto } from "@/service/unsplash";
import { useMutation } from "react-query";

export const useLikePhotoMutation = (photoId: string) => {
  return useMutation(() => likePhoto(photoId), {
    onSuccess: () => {
      console.log(`Liked photo with ID ${photoId}`);
    },
    onError: (error) => {
      console.error(`Failed to like photo with ID ${photoId}: ${error}`);
    },
  });
};
