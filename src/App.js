import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import "./App.css";
import Gall from "./components/Gall/Gall";

import About from "./pages/About/About";

import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Team from "./pages/Team/Team";

const ContactLazy = React.lazy(() => import("./pages/Contact/Contact"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about" element={<About />}>
          <Route
            index
            element={
              <Gall url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRAQND-k1ZuPsgcO7PnZR5K2GxdaSkpUix9Q&usqp=CAU" />
            }
          />
          <Route
            path="oneplus"
            element={
              <Gall url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRAQND-k1ZuPsgcO7PnZR5K2GxdaSkpUix9Q&usqp=CAU" />
            }
          />
          <Route
            path="apple"
            element={
              <Gall url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMF9fqnvY2sk8HKGNhbJPJzcqumgLWHP1ZYw&usqp=CAU" />
            }
          />
          <Route
            path="asus"
            element={
              <Gall url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUUCKKlzUtVXJIbulnk7iZIXW5XuJX-z9lIQ&usqp=CAU" />
            }
          />
          <Route
            path="google-pixel"
            element={
              <Gall url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQcjNXbZcxRGAzVkjKlzJhBcWOAWEJIRxWVQ&usqp=CAU" />
            }
          />
          <Route
            path="samsung"
            element={
              <Gall url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS67ydyYLv44iAuBF-SbhUp-9BptmmSOfiauA&usqp=CAU" />
            }
          />
        </Route>
        <Route
          path="/contact"
          element={
            <React.Suspense fallback=<MoonLoader color="#36d7b7" />>
              <ContactLazy />
            </React.Suspense>
          }
        />
        <Route path="/product" element={<Product />} />

        <Route path="/product/:slug" element={<SingleProduct />} />
      </Routes>
    </>
  );
}

export default App;
