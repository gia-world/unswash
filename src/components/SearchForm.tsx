import { ChangeEvent, FormEvent } from "react";

type Props = {
  keyword: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<Element>) => void;
};

export default function SearchForm({ keyword, onChange, onSubmit }: Props) {
  const searchEnabled = keyword ? keyword.length > 2 : false;

  return (
    <section>
      <form onSubmit={onSubmit}>
        <input type="text" value={keyword} onChange={onChange} />
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
