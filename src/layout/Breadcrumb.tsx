import { Link } from "react-router-dom";
import { useAppContext } from "../state/AppContext";

export const Breadcrumb = () => {
  const { breadcrumbs } = useAppContext();

  return (
    <div className="text-sm breadcrumbs bg-gray-200">
      <ul className="ml-3">
        {breadcrumbs.map((breadcrumb, index) => {
          return (
            <li key={index}>
              <Link to={breadcrumb.url}>{breadcrumb.text}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
