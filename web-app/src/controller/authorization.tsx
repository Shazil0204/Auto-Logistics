// components/auth/Authorization.tsx
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

  const handleForgotPassword = () => {
    setCurrentView("forgotPassword");
  };

  const handleResetPassword = () => {
    setCurrentView("resetPassword");
  };

  return (
    <div>
      {currentView === "login" && (
        <Login onForgotPassword={handleForgotPassword}>
          <div className="flex flex-col">
            <div>Login Form</div> {/* Default design content here */}
            <button className="bg-blue-400 p-10" onClick={onLogin}>
              login
            </button>
          </div>
        </Login>
      )}
      {currentView === "forgotPassword" && (
        <ForgotPassword onResetPassword={handleResetPassword} />
      )}
      {currentView === "resetPassword" && <ResetPassword />}
    </div>
  );
};

export default Authorization;
