import { ReactElement, useState } from "react";

function useFormHook(pages: ReactElement[]) {
  const [indexPage, setIndexPage] = useState(0);

  function nextPage() {
    setIndexPage((prevPageIndex) => {
      if (prevPageIndex >= pages.length - 1) return prevPageIndex;
      return prevPageIndex + 1;
    });
  }
  function previousPage() {
    setIndexPage((prevPageIndex) => {
      if (prevPageIndex <= 0) return prevPageIndex;
      return prevPageIndex - 1;
    });
  }

  return { indexPage, nextPage, previousPage, page: pages[indexPage], pages };
}
export default useFormHook;
