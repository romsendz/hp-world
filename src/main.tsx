import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import Home from "./pages/Home/index.tsx";
import Students from "./pages/Students/index.tsx";
import Staff from "./pages/Staff/index.tsx";
import Houses from "./pages/Houses/index.tsx";
import NotFound from "./pages/NotFound/index.tsx";
import Container from "./layouts/Container/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Container>
        <Routes>
          <Route index element={<Home />} />
          <Route path="students" element={<Students />} />
          <Route path="stuff" element={<Staff />} />
          <Route path="houses" element={<Houses />} />
          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </BrowserRouter>
  </StrictMode>
);
