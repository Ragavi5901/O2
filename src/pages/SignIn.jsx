import React, { useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth, db } from "../firebase/firebaseConfig";
import { useNavigate, useLocation } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { doc, getDoc } from "firebase/firestore";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Minimum 6 characters")
    .required("Password is required"),
});

const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("verified") === "true") {
      setMessage("✅ Email verified. You can now log in.");
    }
  }, [location]);

  const onSubmit = async (data) => {
    setMessage("");
    try {
      const userCred = await signInWithEmailAndPassword(auth, data.email, data.password);
      if (!userCred.user.emailVerified) {
        setMessage("❌ Please verify your email before signing in.");
        return;
      }

      const userDoc = await getDoc(doc(db, "users", userCred.user.uid));
      if (userDoc.exists()) {
        navigate("/"); // ✅ Redirect all users to homepage
      } else {
        setMessage("❌ Invalid user. Please register first.");
      }
    } catch (error) {
      console.error("Login error:", error.code);
      if (
        error.code === "auth/user-not-found" ||
        error.code === "auth/invalid-credential"
      ) {
        setMessage("❌ Invalid user. Please register first.");
      } else if (error.code === "auth/wrong-password") {
        setMessage("❌ Incorrect password. Please try again.");
      } else {
        setMessage("❌ Something went wrong. Please try again.");
      }
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        setMessage("Access denied: You are not a registered user.");
        return;
      }

      navigate("/"); // ✅ Redirect all users to homepage
    } catch (error) {
      setMessage("Google sign-in error: " + error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-center">Sign In</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            placeholder="Email"
            {...register("email")}
            className="w-full mb-1 px-4 py-2 border rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mb-2">{errors.email.message}</p>
          )}

          <input
            type="password"
            placeholder="Password"
            {...register("password")}
            className="w-full mb-1 px-4 py-2 border rounded"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mb-3">
              {errors.password.message}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700"
          >
            Sign In
          </button>
        </form>

        <button
          onClick={handleGoogleSignIn}
          className="w-full mt-3 border border-gray-300 py-2 rounded hover:bg-gray-50 flex items-center justify-center gap-2"
        >
          <FaGoogle className="text-red-500" />
          Continue with Google
        </button>

        {message && (
          <p className="text-center text-sm mt-4 text-red-500">
            {message}
          </p>
        )}

        <p className="mt-4 text-center text-sm">
          Don’t have an account?{" "}
          <a href="/register" className="text-orange-600 underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
