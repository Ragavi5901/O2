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
import EditProfile from "./pages/EditProfile";

import { AuthProvider, AuthContext } from "./contexts/AuthContext";

// ✅ ProtectedRoute with robust checks & logging

const ProtectedRoute = ({ allowedRoles, children }) => {
  const { user, role, authChecked } = React.useContext(AuthContext);

  console.log("[ProtectedRoute] authChecked:", authChecked, "user:", !!user, "userRole:", role);

  // Wait until both auth and role are fully resolved
  if (!authChecked || (user && role == null)) {
  console.log("⏳ Waiting for role/user...");
  return <div>Loading...</div>;
}

if (!user || !allowedRoles.includes(role)) {
  console.warn("🚫 Access denied. User:", user?.email, "Role:", role);
  return <Navigate to="/login" />;
}


  return children;
};

// ✅ DashboardRedirect routes after full resolution
const DashboardRedirect = () => {
  const { role, authChecked } = React.useContext(AuthContext);

  console.log("[DashboardRedirect] authChecked:", authChecked, "userRole:", role);

  if (!authChecked || role == null) {
    return <div>Loading...</div>;
  }
  if (role === "admin") return <Navigate to="/admindashboard" />;
  if (role === "superadmin") return <Navigate to="/superadmindashboard" />;
  return <Navigate to="/" />;
};

// ✅ Main app wrapper where header/footer are shown/hidden
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

        {/* Protected admin / superadmin dashboard routes */}
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

        {/* Alias route that figures out where to go */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute allowedRoles={["admin", "superadmin"]}>
              <DashboardRedirect />
            </ProtectedRoute>
          }
        />
        <Route
  path="/edit-profile"
  element={
    <ProtectedRoute allowedRoles={["admin", "superadmin", "user"]}>
      <EditProfile />
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

// ✅ Root component with context provider
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
