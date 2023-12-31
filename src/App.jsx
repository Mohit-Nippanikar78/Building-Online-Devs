  import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";

  import "./App.css";
  import Root from "./Root";
  import { About, Consultation, Homepage, ProductCatalogue, ProductPage, Support, Login, ForgotPassword, ResetPassword, LoginPage, Register, Account, Checkout, Payment, Logout } from "./components";
  import { useEffect } from "react";
  function App() {

    
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<Root />}>
          <Route index element={<Homepage />} />
          <Route path="/products" element={<ProductCatalogue />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/consultations" element={<Consultation />} />
          <Route path="/support" element={<Support />} />
          <Route path="/login" element={<Login />} >
            <Route index element={<LoginPage />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="reset-password" element={<ResetPassword />} />
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<Account />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/logout" element={<Logout />} />
        </Route>
      )
    );
    return <RouterProvider router={router} />;
  }

  export default App;
