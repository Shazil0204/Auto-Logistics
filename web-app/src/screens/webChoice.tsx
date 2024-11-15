import { useNavigate } from "react-router-dom";

const WebChoice = () => {
  const navigate = useNavigate();
  const username = "Auto"; // Example username, replace with actual user data

  const handleServiceCam = () => {
    window.location.href = "http://10.108.50.0/";
  };

  const handleAutoLogistics = () => {
    navigate("/search");
  };

  const cards = [
    {
      id: "serviceCam",
      title: "ServiceCam",
      description:
        "Explore our ServiceCam platform for advanced camera-based services.",
      imageSrc: "/serviceCamIMG.jpg",
      onClick: handleServiceCam,
    },
    {
      id: "autoLogistics",
      title: "AutoLogistics",
      description: "Manage your logistics with ease using AutoLogistics tools.",
      imageSrc: "/autoLogisticsIMG.png",
      onClick: handleAutoLogistics,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-teal-800 p-6">
      {/* Welcome message */}
      <div className="mb-8 text-center text-white">
        <h1 className="text-4xl font-bold mb-2">Welcome, {username}!</h1>
        <p className="text-lg">Please select a service to continue</p>
      </div>

      {/* Service options (Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={card.onClick}
            className="bg-white rounded-lg p-6 cursor-pointer hover:scale-105 transform transition duration-300 flex flex-col gap-10 shadow-[0_0px_60px_0px_rgba(0,0,0,0.4)]"
          >
            <div className="h-[400px] flex justify-center items-center">
              <img src={card.imageSrc} className="rounded-lg" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-teal-800 mb-4">
                {card.title}
              </h2>
              <p className="text-gray-700">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebChoice;
