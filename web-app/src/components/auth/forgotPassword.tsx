import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

interface ForgotPasswordProps {
  onResetPassword: () => void;
  backToDefault: () => void;
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({
  onResetPassword,
  backToDefault,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-xl text-center p-2 ">
        Please enter your email for verification code
      </p>
      <div>
        <label htmlFor="email">Email</label>
        <div className="min-w-full border-2 border-black rounded-xl p-2 flex items-center box-border">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-2xl bg-[#008080] text-white p-5 rounded-lg"
          />
          <input
            id="email"
            type="email"
            className="w-full h-[40px] ml-2 rounded-xl outline-none text-2xl"
          />
        </div>
      </div>
      <button className="text-left" onClick={backToDefault}>
        Go Back
      </button>
      <button
        className="bg-[#008080] text-white p-2 rounded-lg "
        onClick={onResetPassword}
      >
        Reset Password
      </button>
    </div>
  );
};

export default ForgotPassword;
