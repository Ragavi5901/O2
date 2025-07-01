// App.jsx
import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation
} from "react-router-dom";
import Navbar from "./NavFooter/Navbar";
import Footer from "./NavFooter/Footer";
import Home from "./Components/HomePage/Home";
import Products from "./Components/Products/Products";
import AboutUs from "./Components/About/AboutUs";
import Contacts from "./Components/Contact/Contacts";
import MassageChair from "./Components/Products/MassageChair";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import CheckoutPage from "./pages/CheckoutPage";
import CartPage from "./pages/CartPage";
import AdminDashboard from "./pages/AdminDashboard";
import SuperAdminDashboard from "./pages/SuperAdminDashboard";


import MyOrders from "./pages/UserDashboard/MyOrders";
import Wishlist from "./pages/UserDashboard/Wishlist";
import Cart from "./pages/CartPage";
import ProfileSettings from "./pages/UserDashboard/ProfileSettings";
import Reviews from "./pages/UserDashboard/Reviews";
import SupportTickets from "./pages/UserDashboard/SupportTickets";

import { AuthProvider, AuthContext } from "./contexts/AuthContext";

const ProtectedRoute = ({ allowedRoles, children }) => {
  const { user, role, authChecked } = React.useContext(AuthContext);

  if (!authChecked || (user && role == null)) {
    return <div>Loading...</div>;
  }

  if (!user || !allowedRoles.includes(role)) {
    return <Navigate to="/login" />;
  }

  return children;
};

const DashboardRedirect = () => {
  const { role, authChecked } = React.useContext(AuthContext);

  if (!authChecked || role == null) {
    return <div>Loading...</div>;
  }
  if (role === "admin") return <Navigate to="/admindashboard" />;
  if (role === "superadmin") return <Navigate to="/superadmindashboard" />;
  return <Navigate to="/orders" />;
};

const AppWrapper = () => {
  const location = useLocation();
  const hideNavAndFooter = ["/login", "/register"];
  const shouldHide = hideNavAndFooter.includes(location.pathname);

  return (
    <>
      {!shouldHide && <Navbar />}

      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/products/massage-chair" element={<MassageChair />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />

        {/* Admin and Superadmin dashboards */}
        <Route
          path="/admindashboard"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/superadmindashboard"
          element={
            <ProtectedRoute allowedRoles={["superadmin"]}>
              <SuperAdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* Shared access */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute allowedRoles={["admin", "superadmin", "user"]}>
              <DashboardRedirect />
            </ProtectedRoute>
          }
        />
       

        {/* User dashboard access to features */}
        <Route
          path="/orders"
          element={
            <ProtectedRoute allowedRoles={["user", "admin", "superadmin"]}>
              <MyOrders />
            </ProtectedRoute>
          }
        />
        <Route
          path="/wishlist"
          element={
            <ProtectedRoute allowedRoles={["user", "admin", "superadmin"]}>
              <Wishlist />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user-cart"
          element={
            <ProtectedRoute allowedRoles={["user", "admin", "superadmin"]}>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route
          path="/edit-profile"
          element={
            <ProtectedRoute allowedRoles={["user", "admin", "superadmin"]}>
              <ProfileSettings />
            </ProtectedRoute>
          }
        />
        <Route
          path="/reviews"
          element={
            <ProtectedRoute allowedRoles={["user", "admin", "superadmin"]}>
              <Reviews />
            </ProtectedRoute>
          }
        />
        <Route
          path="/support"
          element={
            <ProtectedRoute allowedRoles={["user", "admin", "superadmin"]}>
              <SupportTickets />
            </ProtectedRoute>
          }
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      {!shouldHide && <Footer />}
    </>
  );
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppWrapper />
      </AuthProvider>
    </Router>
  );
}

export default App;