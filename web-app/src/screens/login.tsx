interface LoginProps {
  onForgotPassword: () => void;
  children: React.ReactNode;
}

const Login: React.FC<LoginProps> = ({ onForgotPassword, children }) => {
  return (
    <div>
      {children} {/* Default content (e.g., form fields) */}
      <button onClick={onForgotPassword}>Forgot Password?</button>
    </div>
  );
};

export default Login;
