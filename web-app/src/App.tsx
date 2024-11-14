import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./screens/login";
import Search from "./screens/router/search";
import Issue from "./screens/router/issue";
import Invoice from "./screens/router/invoice";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="/issue" element={<Issue />} />
        <Route path="/invoice" element={<Invoice />} />
      </Routes>
    </>
  );
}

export default App;
