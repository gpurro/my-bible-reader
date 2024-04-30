import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";

export const HomePage = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center p-6 m-0 mt-36">
      <div className="flex flex-wrap justify-center">
        <a href="https://vitejs.dev" target="_blank">
          <img
            src={viteLogo}
            className="h-24 p-6 drop-shadow-md"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="h-24 p-6 drop-shadow-md"
            alt="React logo"
          />
        </a>
      </div>
      <h1>Vite + React (TS) + My Extra Features</h1>
      <div className="p-6">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-blue-500">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
};
