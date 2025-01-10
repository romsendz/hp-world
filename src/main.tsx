import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import Home from "./pages/Home/index.tsx";
import Houses from "./pages/Houses/index.tsx";
import NotFound from "./pages/NotFound/index.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Books from "./pages/Books/index.tsx";
import Characters from "./pages/Characters/index.tsx";
import Spells from "./pages/Spells/index.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Container>
        <Routes>
          <Route index element={<Home />} />
            <Route path="books" element={<Books />} />
            <Route path="characters" element={<Characters />} />
          <Route path="houses" element={<Houses />} />
            <Route path="spells" element={<Spells />} />
          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
