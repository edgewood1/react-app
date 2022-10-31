import React from "react";
import { createRoot } from "react-dom/client";

const rootElement= (document.getElementById("root") as HTMLElement);
const root = createRoot(rootElement);

const Here =(str: string) => {
  return <div>{str}</div>;
}

const App = () => {
   return Here('hi')
};

root.render(<App />);
