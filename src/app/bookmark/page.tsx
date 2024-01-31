"use client";
import LikedItem from "@/components/LikedItem";
import { useLikePhotoContext } from "@/context/LikePhotoContext";

export default function BookmarkPage() {
  const { state } = useLikePhotoContext();

  const likedPhotoIds = state
    .filter((item) => item.isLiked)
    .map((item) => item.photoId);

  if (likedPhotoIds.length === 0) {
    return <div>no data</div>;
  }

  return (
    <>
      <section className="bg-slate-400 py-12">
        <div className="w-[80%] mx-auto">
          <div className="text-white">
            <h3 className="text-3xl font-bold">My Likes</h3>
          </div>
        </div>
      </section>
      <section className="p-12 flex-1">
        <ul className="grid grid-cols-3 gap-4">
          {likedPhotoIds.map((id) => (
            <li key={id}>
              <LikedItem photoId={id} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
