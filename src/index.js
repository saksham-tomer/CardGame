import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import GamePage from "./pages/GamePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page404 from "./pages/404";
import { store } from "./app/store";
import { Provider } from "react-redux";
import WelcomePage from "./pages/WelcomePage";

const router = createBrowserRouter([
  {
    path: "/game",
    element: <GamePage />,
    errorElement: <Page404 />,
  },
  {
    path: "/",
    element: <WelcomePage />,
    errorElement: <Page404 />,
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in the app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
