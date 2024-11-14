import { useNavigate } from "react-router-dom";

const WebChoice = () => {
  const navigate = useNavigate();

  const handleOption1 = () => {
    navigate("/search");
  };

  const handleOption2 = () => {
    // Handle Option 2 navigation here
    navigate("/otherPage"); // Replace with your desired path
  };

  return (
    <div className="flex flex-col">
      <button onClick={handleOption1}>Option 1: Go to Search</button>
      <button onClick={handleOption2}>Option 2</button>
    </div>
  );
};

export default WebChoice;
