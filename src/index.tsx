import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QuickCommerce } from "./screens/QuickCommerce";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <QuickCommerce />
  </StrictMode>,
);
