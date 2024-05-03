import { Link } from "react-router-dom";
import { SearchResponse as SearchResponseProp } from "../interfaces/search";

interface SearchResponseProps {
  data: SearchResponseProp;
}
export const SearchResponse = ({ data }: SearchResponseProps) => {
  return (
    <>
      <p>
        Showing {data.offset + 1}-{data.limit} of {data.total} results
      </p>
      <ul>
        {data.verses.map((verse) => (
          <li key={verse.id} className="my-4">
            <div>
              <p>
                <b>{verse.reference}</b>
              </p>
              <p>{verse.text}</p>
              <Link
                to={`/bible/${verse.bibleId}/show/book/${verse.bookId}/chapter/${verse.chapterId}`}
                className=" link "
              >
                View Chapter
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
