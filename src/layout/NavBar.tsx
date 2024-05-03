import { Link } from "react-router-dom";
import { useAppContext } from "../state/AppContext";
import { SearchBox } from "./SearchBox";

export const NavBar = () => {
  const { selectedBible } = useAppContext();

  return (
    <div className="navbar bg-neutral text-neutral-content">
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          My Bible Reader
        </Link>
      </div>

      <div className="flex-none gap-2">
        <SearchBox />
      </div>

      <div className="flex-none mx-2">
        <Link to="/bible/select">
          Bible: {selectedBible?.abbreviation ?? "[Select]"}
        </Link>
      </div>

      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/login">Log In</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
