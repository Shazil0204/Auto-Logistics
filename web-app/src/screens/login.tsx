import { useState } from "react";
import WebChoice from "./webChoice";

const Login = () => {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <>
      {isLogged ? (
        <div>
          <WebChoice />
        </div>
      ) : (
        <button onClick={() => setIsLogged(!isLogged)}>Login</button>
      )}
    </>
  );
};

export default Login;
