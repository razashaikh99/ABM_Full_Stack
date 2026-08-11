// src/Pages/Auth.jsx
import React, { useState } from "react";
import LoginForm from "../Components/Auth/LoginForm";
import RegisterForm from "../Components/Auth/RegisterForm";
import ForgotPasswordForm from "../Components/Auth/ForgotPasswordForm";

const Auth = () => {
    const [activeTab, setActiveTab] = useState("login");

    const renderForm = () => {
        switch (activeTab) {
            case "register":
                return <RegisterForm />;
            case "forgot":
                return <ForgotPasswordForm />;
            default:
                return <LoginForm />;
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">

            <section className="container mx-auto px-4 py-16 flex flex-col items-center justify-center">
                <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-xl">
                    {/* Tabs */}
                    <div className="flex justify-between mb-6 border-b border-gray-200">
                        <button
                            onClick={() => setActiveTab("login")}
                            className={`flex-1 py-2 font-semibold ${activeTab === "login"
                                    ? "text-primary border-b-2 border-primary"
                                    : "text-gray-500"
                                }`}
                        >
                            Login
                        </button>
                        <button
                            onClick={() => setActiveTab("register")}
                            className={`flex-1 py-2 font-semibold ${activeTab === "register"
                                    ? "text-primary border-b-2 border-primary"
                                    : "text-gray-500"
                                }`}
                        >
                            Register
                        </button>
                        <button
                            onClick={() => setActiveTab("forgot")}
                            className={`flex-1 py-2 font-semibold ${activeTab === "forgot"
                                    ? "text-primary border-b-2 border-primary"
                                    : "text-gray-500"
                                }`}
                        >
                            Forgot
                        </button>
                    </div>

                    {/* Form */}
                    <div>{renderForm()}</div>
                </div>

                {/* Optional Info */}
                {/* <p className="mt-6 text-gray-600 text-center text-sm">
                    By logging in or creating an account, you agree to our{" "}
                    <span className="text-primary font-medium cursor-pointer hover:underline">
                        Terms & Conditions
                    </span>{" "}
                    and{" "}
                    <span className="text-primary font-medium cursor-pointer hover:underline">
                        Privacy Policy
                    </span>
                    .
                </p> */}
            </section>
        </div>
    );
};

export default Auth;
