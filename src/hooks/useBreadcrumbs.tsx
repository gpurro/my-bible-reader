import { useLocation, useParams } from "react-router-dom";
import { useAppContext } from "../state/AppContext";
import { useEffect } from "react";
import { Breadcrumb } from "../interfaces/breadcrumb";

export const useBreadcrumbs = () => {
  const { bookId, chapterId } = useParams();
  const { selectedBible, setBreadcrumbs } = useAppContext();
  const location = useLocation();

  useEffect(() => {
    const breadcrumbs: Breadcrumb[] = [];

    // set breadcrumbs
    if (selectedBible?.id) {
      breadcrumbs.push({
        text: selectedBible?.name,
        url: `/bible/${selectedBible?.id}/show`,
      });
    }

    if (bookId) {
      breadcrumbs.push({
        text: bookId,
        url: `/bible/${selectedBible?.id}/show/book/${bookId}`,
      });
    }

    if (bookId && chapterId) {
      breadcrumbs.push({
        text: chapterId,
        url: `/bible/${selectedBible?.id}/show/book/${bookId}/chapter/${chapterId}`,
      });
    }

    setBreadcrumbs(breadcrumbs);
  }, [location, selectedBible]);

  return {};
};
