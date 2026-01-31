import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ButtonsPage from "./pages/buttons/index.jsx";
import RootLayout from "./layout/RootLayout.jsx";
import { sideMenuRoutes } from "./routes/sideMenuRoutes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          {sideMenuRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              index={route.index}
              element={route.element}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
