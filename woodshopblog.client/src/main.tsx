import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./components/Header";
import BlogList from "./components/BlogList";
import BlogPost from "./components/BlogPost";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<BlogList />} />
      <Route path="/blogs/:blogId" element={<BlogPost />} />
    </Routes>
  </BrowserRouter>,
);
