import React from "react";

// react-router-dom
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// layouts
import RootLayout from "../layouts/RootLayout";
import Home from "../views/home/Index";
import About from "../views/About";
import Tours from "../views/Tours";
import Contact from "../views/Contact";

// pages

const Routes = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index path="/"  element={<Home />} />
        <Route path="/about" index element={<About />} />
        <Route path="/tour" index element={<Tours />} />
        <Route path="/contact" index element={<Contact />} />
      </Route>
    )
  );
  return <RouterProvider router={routes} />;
};

export default Routes;
