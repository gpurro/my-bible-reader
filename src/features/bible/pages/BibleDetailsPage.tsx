import { Bible } from "../components/Bible";
import { useSelectedBible } from "../hooks/useSelectedBible";

export const BibleDetailsPage = () => {
  const { bibleId } = useSelectedBible();
  return <div>{bibleId && <Bible bibleId={bibleId} />}</div>;
};
