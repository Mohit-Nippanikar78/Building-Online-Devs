import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import "./App.css";
import Root from "./Root";
import { Homepage, ProductCatalogue } from "./components";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ProductCatalogue />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
