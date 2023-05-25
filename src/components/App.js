import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { GlobalStyle } from "../styles/GlobalStyle";
import { Layout } from "./Layout";
import SubBreeds from "./SubBreeds";
// import Home from "pages/Home";
// import Dogs from "pages/Dogs";
// import DogDetails from "pages/DogDetails";
// import Gallery from "./Gallery";

const Home = lazy(() => import("../pages/Home"));
const Dogs = lazy(() => import("../pages/Dogs"));
const DogDetails = lazy(() => import("../pages/DogDetails"));
const Gallery = lazy(() =>
  import("./Gallery").then((module) => ({
    ...module,
    default: module.Gallery,
  }))
);

function App() {
  return (
    <>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/dogs/" element={<Dogs />} />
          <Route path="dogs/:dogId" element={<DogDetails />}>
            <Route path="subbreeds" element={<SubBreeds />} />
            <Route path="gallery" element={<Gallery />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
