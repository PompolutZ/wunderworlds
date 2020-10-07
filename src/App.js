import React from "react";
import { ReactComponent as BigLogo } from "./svgs/big_logo.svg";

function App() {
  return (
    <div className="w-full h-full text-gray-900 grid grid-rows-layout p-4">
      <header>
        <BigLogo />
      </header>
      <main className="w-full h-full">Some content here</main>
      <footer>Some copyrights info here</footer>
    </div>
  );
}

export default App;
