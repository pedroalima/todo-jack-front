import { TaskProvider } from "@/contexts/TaskContext";
import { HomePage } from "@/pages/Home";
import { SignInPage } from "@/pages/sign-in";
import SignUpPage from "@/pages/sign-up";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DashboardPage } from "../pages/dashboard";
import PrivateRoute from "./privateRoute";
import PublicRoute from "./publicRoutes";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <HomePage />
            </PublicRoute>
          }
        />
        <Route
          path="/sign-in"
          element={
            <PublicRoute>
              <SignInPage />
            </PublicRoute>
          }
        />
        <Route
          path="/sign-up"
          element={
            <PublicRoute>
              <SignUpPage />
            </PublicRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <TaskProvider>
                <DashboardPage />
              </TaskProvider>
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
