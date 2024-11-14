interface ForgotPasswordProps {
  onResetPassword: () => void;
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({ onResetPassword }) => {
  return (
    <div>
      <div>Forgot Password Form</div>{" "}
      {/* Add your Forgot Password content here */}
      <button onClick={onResetPassword}>Reset Password</button>
    </div>
  );
};

export default ForgotPassword;
