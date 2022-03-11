import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainTable } from "./components/MainTable";
import { SelectTable } from "./components/SelectTable";

export const useRoutes = () => (
  <Routes>
    <Route path="/" element={<SelectTable />} />
    <Route path="/table" element={<MainTable />} />
    <Route path="*" element={<p>bad PATH</p>} />
  </Routes>
);
