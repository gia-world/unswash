import { FormEvent, useState } from "react";

type Props = {
  onSubmit: (e: FormEvent, text: string) => void;
};

export default function SearchForm({ onSubmit }: Props) {
  const [text, setText] = useState("");
  const searchEnabled = text ? text.length > 2 : false;

  return (
    <section>
      <form onSubmit={(e) => onSubmit(e, text)}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className={`font-bold ${
            searchEnabled ? "text-sky-500" : "text-pink-500"
          }`}
          type="submit"
          disabled={!searchEnabled}
        >
          검색
        </button>
      </form>
      {!searchEnabled && (
        <span className="text-sm">검색어는 3글자 이상 입력하세요</span>
      )}
    </section>
  );
}
