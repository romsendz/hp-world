import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.tsx";
import Stuff from "./pages/Stuff.tsx";
import Students from "./pages/Students.tsx";
import Houses from "./pages/Houses.tsx";
import NotFound from "./pages/NotFound.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="students" element={<Students />} />
        <Route path="stuff" element={<Stuff />} />
        <Route path="houses" element={<Houses />} />
        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
