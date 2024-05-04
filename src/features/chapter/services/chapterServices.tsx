import { Children } from "react";
import { apiClient } from "../../../api/apiClient";
import { Chapter } from "../interfaces/chapter";
import parse, {
  Element,
  DOMNode,
  HTMLReactParserOptions,
  domToReact,
} from "html-react-parser";

export const fetchChapter = async (bibleId: string = "", chapterId: string) => {
  const chapterResponse = await apiClient.get(
    `bibles/${bibleId}/chapters/${chapterId}`,
    {
      params: {
        "content-type": "json",
        "include-verse-numbers": "false",
      },
    }
  );
  if (chapterResponse.status != 200) {
    throw new Error(chapterResponse.statusText);
  }
  return chapterResponse.data.data as Chapter;
};

export const fetchChapters = async (bibleId: string, bookId: string) => {
  const chapters: Chapter[] = [];

  const chaptersResponse = await apiClient.get(
    `bibles/${bibleId}/books/${bookId}/chapters`
  );
  if (chaptersResponse.status != 200) {
    throw new Error(chaptersResponse.statusText);
  }

  chaptersResponse.data.data.forEach((chapter: Chapter) => {
    chapters.push(chapter);
  });
  return chapters as Chapter[];
};

export const parseHtmlChapter = (htmlChapter: string) => {
  return parse(htmlChapter, options);
};

const options: HTMLReactParserOptions = {
  replace: (domNode: DOMNode) => {
    // console.log(domNode);
    if (domNode instanceof Element) {
      if (domNode.attribs && domNode.attribs["data-number"]) {
        const className = domNode.attribs["class"] || "";
        const dataNumber = domNode.attribs["data-number"] || "";
        return (
          <VerseNumber
            className={className}
            dataNumber={dataNumber}
          ></VerseNumber>
        );
      } else if (domNode.tagName == "p") {
        console.log("tag p: ", domNode);
        const domNodeChildren = domNode.children as DOMNode[];
        return <VerseParagraph>{domToReact(domNodeChildren)}</VerseParagraph>;
      }
    }
  },
};

interface VerseNumberProps {
  className: string;
  dataNumber: string;
}
const VerseNumber = ({ className, dataNumber }: VerseNumberProps) => {
  return <span className={className}>X{dataNumber}</span>;
};

const VerseParagraph = ({ children }: React.PropsWithChildren) => {
  const childrenArray = Children.toArray(children);

  console.log("childrenArray: ", childrenArray);

  return <p>{children}</p>;
};
