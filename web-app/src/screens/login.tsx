import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

interface LoginProps {
  onForgotPassword: () => void;
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onForgotPassword, onLogin }) => {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <div>
          <label htmlFor="username">Username</label>
          <div className="min-w-full border-2 border-black rounded-xl p-2 flex items-center box-border">
            <FontAwesomeIcon
              icon={faUser}
              className="text-2xl bg-[#008080] text-white p-5 rounded-lg"
            />
            <input
              id="username"
              className="w-full h-[40px] ml-2 rounded-xl outline-none text-2xl"
            />
          </div>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <div className="min-w-full border-2 border-black rounded-xl p-2 flex items-center box-border">
            <FontAwesomeIcon
              icon={faLock}
              className="text-2xl bg-[#008080] text-white p-5 rounded-lg"
            />
            <input
              id="password"
              type="password"
              className="w-full h-[40px] ml-2 rounded-xl outline-none text-2xl"
            />
          </div>
        </div>
        <button
          className="text-left min-w-full text-gray-700"
          onClick={onForgotPassword}
        >
          Forgot Password?
        </button>
        <button
          className="bg-[#008080] text-white p-5 rounded-xl text-2xl"
          onClick={onLogin}
        >
          login
        </button>
      </div>
    </div>
  );
};

export default Login;
