"use client";
import LikedItem from "@/components/LikedItem";
import { useLikePhotoContext } from "@/context/LikePhotoContext";

export default function BookmarkPage() {
  const { state } = useLikePhotoContext();

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
        {state.length === 0 ? (
          <div>해당하는 아이템이 없습니다.</div>
        ) : (
          <ul className="grid grid-cols-3 gap-4">
            {state.map((id) => (
              <li key={id}>
                <LikedItem photoId={id} />
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
