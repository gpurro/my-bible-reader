import { Navigate } from "react-router-dom";
import { useAppContext } from "../../state/AppContext";

const defaultBibleId = "7142879509583d59-01";

export const HomePage = () => {
  const appContext = useAppContext();
  const bibleId = appContext.selectedBible?.id || defaultBibleId;
  return <Navigate to={`/bible/${bibleId}/show`} />;
};
