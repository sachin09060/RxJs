import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Dashboard = lazy(() => import("./pages/dashboard"));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading........!</div>}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
