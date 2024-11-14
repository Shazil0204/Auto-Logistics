import { Route, Routes } from "react-router-dom";
import "./App.css";
import Search from "./screens/router/search";
import Issue from "./screens/router/issue";
import Invoice from "./screens/router/invoice";
import Login from "./screens/login";
import WebChoice from "./screens/webChoice";
import { useState } from "react";
import NotFound from "./screens/notFound";

function App() {
  const [isLogged, setIsLogged] = useState<boolean>(false);

  const handleLogin = () => {
    setIsLogged(true); // Set user as logged in
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={isLogged ? <WebChoice /> : <Login onLogin={handleLogin} />}
        />{" "}
        <Route path="/search" element={<Search />} />
        <Route path="/issue" element={<Issue />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
