import React from "react";
import { Route, Routes } from "react-router";
import { Main } from "./components/Main";
import { NotFound } from "./components/NotFound";

export const App: React.FC = () => (
  <div className="app">
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/main" element={<Main />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </div>
);
