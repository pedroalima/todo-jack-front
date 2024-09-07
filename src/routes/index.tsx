import { SignInPage } from "@/pages/sign-in";
import SignUpPage from "@/pages/sign-up";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DashboardPage } from "../pages/dashboard";
import { HomePage } from "../pages/home";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
