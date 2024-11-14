import React from "react";

interface ResetPasswordProps {
  backToDefault: () => void;
}

const ResetPassword: React.FC<ResetPasswordProps> = ({ backToDefault }) => {
  return (
    <div>
      <div>Reset Password Form</div>
      <button onClick={backToDefault}>Back to Login Page</button>
    </div>
  );
};

export default ResetPassword;
