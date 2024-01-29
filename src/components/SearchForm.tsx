import { FormEvent, useState } from "react";

type Props = {
  onSubmit: (e: FormEvent, text: string) => void;
};

export default function SearchForm({ onSubmit }: Props) {
  const [text, setText] = useState("");
  const searchEnabled = text ? text.length > 1 : false;

  return (
    <>
      <form
        onSubmit={(e) => onSubmit(e, text)}
        className="flex justify-between gap-4"
      >
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 py-1 px-2 rounded-sm"
        />
        <button
          className={`rounded-sm px-3 font-bold text-white ${
            searchEnabled ? "bg-blue-500" : "bg-neutral-500"
          }`}
          type="submit"
          disabled={!searchEnabled}
        >
          검색
        </button>
      </form>
      {!searchEnabled && (
        <p className="text-sm mt-2 ml-1 text-neutral-600">
          ( 검색어는 2글자 이상 입력하세요 )
        </p>
      )}
    </>
  );
}
