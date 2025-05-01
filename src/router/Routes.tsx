import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NotFound } from "../features/notfound/NotFound";
import { LoginPage } from "../features/auth/LoginPage";
import { DashboardPage } from "../features/dashboard/DashboardPage";
import { TransactionPage } from "../features/transaction/TransactionPage";
import { JSX } from "react";

// ProtectedRoute component
const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/auth/login" replace />;
};

export const Router = () => {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/auth/login" element={<LoginPage />} />
        
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/transaction"
          element={
            <ProtectedRoute>
              <TransactionPage />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
