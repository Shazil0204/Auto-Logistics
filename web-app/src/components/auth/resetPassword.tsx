import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

interface ResetPasswordProps {
  backToDefault: () => void;
}

const ResetPassword: React.FC<ResetPasswordProps> = ({ backToDefault }) => {
  return (
    <div className="flex flex-col gap-4">
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
      <div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <div className="min-w-full border-2 border-black rounded-xl p-2 flex items-center box-border">
          <FontAwesomeIcon
            icon={faLock}
            className="text-2xl bg-[#008080] text-white p-5 rounded-lg"
          />
          <input
            id="confirmPassword"
            type="password"
            className="w-full h-[40px] ml-2 rounded-xl outline-none text-2xl"
          />
        </div>
      </div>
      <button
        className="bg-[#008080] text-white p-5 rounded-xl text-2xl"
        onClick={backToDefault}
      >
        Continue
      </button>
    </div>
  );
};

export default ResetPassword;
