type Props = {
  currentPage: number;
  totalPages: number;
  onChange: (page: number) => void;
};

export default function Pagination({
  totalPages,
  currentPage,
  onChange,
}: Props) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  // 전체 페이지 수만큼의 배열 생성
  //= Array.from({ length: 5 }).map((_, index) => index 1)
  //= Array(totalPages).map((_, index) => index + 1)

  const pageCount = 5; // 한 화면에 보여줄 페이지 개수

  const startPage = Math.max(1, currentPage - Math.floor(pageCount / 2));
  // Math.max(1, ...): 계산한 값이 1보다 작으면 1로 설정
  // Math.floor(pageCount / 2): 현재 페이지를 중심으로 양쪽으로 몇 페이지까지 보여줄지 (소수점 아래 버림)

  const endPage = Math.min(startPage + pageCount - 1, totalPages);
  // Math.min(..., totalPages): 계산한 값이 전체 페이지 수보다 크면 전체 페이지 수로 설정
  // startPage + pageCount - 1: 시작 페이지에 페이지 수를 더하고 1을 빼서 페이지 범위의 끝 페이지를 계산

  const prevEnabled = startPage > 1 && totalPages > pageCount;
  const nextEnabled = endPage < totalPages;
  const viewablePages = pages.slice(
    startPage - 1,
    Math.min(endPage, totalPages)
  );

  if (totalPages === 1) {
    return;
  }
  return (
    <ul className="flex gap-3 mt-8 justify-center">
      {/* {Array.from({ length: totalPages }, (_, index) => (
        <li key={index}>
          <button
            onClick={() => onChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        </li>
      ))} */}
      {prevEnabled && (
        <li>
          <button onClick={() => onChange(startPage - 1)}>이전</button>
        </li>
      )}
      {viewablePages.map((page) => (
        <li key={page}>
          <button
            onClick={() => onChange(page)}
            className={currentPage === page ? "text-blue-600 font-bold" : ""}
          >
            {page}
          </button>
        </li>
      ))}

      {nextEnabled && (
        <li>
          <button onClick={() => onChange(endPage + 1)}>다음</button>
        </li>
      )}
    </ul>
  );
}
