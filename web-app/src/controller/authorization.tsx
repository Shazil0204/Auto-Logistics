import React, { useState } from "react";
import Login from "../screens/login";
import ForgotPassword from "../components/auth/forgotPassword";
import ResetPassword from "../components/auth/resetPassword";

interface authProp {
  onLogin: () => void;
}

const Authorization: React.FC<authProp> = ({ onLogin }) => {
  const [currentView, setCurrentView] = useState<
    "login" | "forgotPassword" | "resetPassword"
  >("login");

  const handleBackToDefault = () => {
    setCurrentView("login");
  };

  const handleForgotPassword = () => {
    setCurrentView("forgotPassword");
  };

  const handleResetPassword = () => {
    setCurrentView("resetPassword");
  };

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-[#00A0A0]">
      <div className="p-5 bg-white shadow-[0_0px_60px_0px_rgba(0,0,0,0.4)]">
        <img src="/zbc_black.jpg" />
        {currentView === "login" && (
          <Login onForgotPassword={handleForgotPassword} onLogin={onLogin} />
        )}
        {currentView === "forgotPassword" && (
          <ForgotPassword
            onResetPassword={handleResetPassword}
            backToDefault={handleBackToDefault}
          />
        )}
        {currentView === "resetPassword" && (
          <ResetPassword backToDefault={handleBackToDefault} />
        )}
      </div>
    </div>
  );
};

export default Authorization;
