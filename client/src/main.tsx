import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import "@/styles/globals.css";
import App from "@/App";
import QueryProvider from "@/providers/query-provider";

const Main = () => {
  return (
    <QueryProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryProvider>
  );
};

const root = createRoot((document.getElementById("root") as HTMLElement)!);

if (import.meta.env.DEV) {
  root.render(
    <StrictMode>
      <Main />
    </StrictMode>
  );
} else {
  root.render(<Main />);
}
