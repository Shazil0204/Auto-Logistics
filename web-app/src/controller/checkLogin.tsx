import { useState } from "react";
import WebChoice from "../screens/webChoice";
import Login from "../screens/login";

const CheckLogin = () => {
  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = () => {
    setIsLogged(true);
  };
  return (
    <>
      {isLogged ? (
        <div>
          <WebChoice />
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </>
  );
};

export default CheckLogin;
