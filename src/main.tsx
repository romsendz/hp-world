import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./styles/index.scss";
import Home from "./pages/Home/index.tsx";
import Houses from "./pages/Houses/index.tsx";
import NotFound from "./pages/NotFound/index.tsx";
import Layout from "./layouts/Layout/index.tsx";
import {
  keepPreviousData,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Books from "./pages/Books/index.tsx";
import Characters from "./pages/Characters/index.tsx";
import Spells from "./pages/Spells/index.tsx";
import { PotterApiProvider } from "./context/PotterAPI/index.tsx";

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
      <PotterApiProvider>
      <BrowserRouter basename="/hp-world">
        <Layout>
          <Routes>
            <Route index element={<Home />} />
            <Route path="books" element={<Books />} />
            <Route path="characters" element={<Characters />} />
            <Route path="houses" element={<Houses />} />
            <Route path="spells" element={<Spells />} />
            {/* 404 Page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
      </PotterApiProvider>
    </QueryClientProvider>
  </StrictMode>
);
