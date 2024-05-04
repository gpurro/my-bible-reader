import { useMemo, useState } from "react";
import { useAppContext } from "../../../state/AppContext";
import { Annotation } from "../../annotation/interfaces/annotation";
import { getAnnotationsByVerseId } from "../../annotation/services/annotationServices";

interface TextViewerProps {
  content: Node[];
}
interface Node {
  name?: "para" | "verse";
  type?: "tag" | "text";
  items?: Node[];
  attrs?: Attr;
  text?: string;
}

interface Attr {
  style?: string;
  verseId?: string;
}

export const TextViewer = ({ content }: TextViewerProps) => {
  return (
    <>
      {content.map((node, index) => {
        switch (node.type) {
          case "tag":
            return processTagTypeNodes(node, index.toString());
            break;

          case "text":
            return processTextTypeNodes(node, index.toString());
            break;

          default:
            console.log("unhandled node: ", node);
            break;
        }
        return <div>{JSON.stringify(node)}</div>;
      })}
    </>
  );
};

const processTagTypeNodes = (node: Node, key: string) => {
  const className =
    node.attrs && node.attrs["style"] ? node.attrs["style"] : "";

  switch (node.name) {
    case "para":
      return (
        <p key={key} className={className}>
          {node.text}
          {node.items && <TextViewer content={node.items}></TextViewer>}{" "}
        </p>
      );
      break;
    case "verse":
      // return <Verse key={key} verse={node.text}></Verse>;
      break;
    default:
      console.log("unhandled node: ", node);
      break;
  }
};

const processTextTypeNodes = (node: Node, key: string) => {
  const verseId =
    node.attrs && node.attrs["verseId"] ? node.attrs["verseId"] : "";

  return (
    <span key={key}>
      {verseId && <VerseNodeViewer node={node} />}
      {!verseId && <span>{node.text}</span>}
    </span>
  );
};

const VerseNodeViewer = ({ node }: { node: Node }) => {
  const verseId =
    node.attrs && node.attrs["verseId"] ? node.attrs["verseId"] : "";
  const verseNumber = verseId.split(".")[2];
  const { selectedBible } = useAppContext();
  const bibleId = selectedBible?.id || "";

  // const initialFavorite = checkFavorite(verseId, bibleId);
  // const [isFavorite, setIsFavorite] = useState(initialFavorite);
  const isFavorite = useMemo(
    () => checkFavorite(verseId, bibleId),
    [verseId, bibleId]
  );

  const handleOnClick = () => {};

  return (
    <span
      className={`hover:bg-yellow-100 ${isFavorite ? " !bg-yellow-100 " : ""}`}
      onClick={handleOnClick}
    >
      {verseNumber && <span className="v">{verseNumber}</span>}
      <span>{node.text}</span>;
    </span>
  );
};

const checkFavorite = (verseId: string, bibleId: string) => {
  const favorites = getAnnotationsByVerseId("1", verseId);

  console.log(`checking ${verseId} ${bibleId} `);

  if (!bibleId) return false;

  return favorites.some(
    (favorite: Annotation) =>
      favorite.verseId === verseId && favorite.bibleId === bibleId
  );
};
