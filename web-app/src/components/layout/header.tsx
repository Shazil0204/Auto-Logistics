import Navbar from "./navbar"
import { useNavigate } from "react-router-dom"

const Header = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className="w-full h-20 flex xl:justify-between sm:justify-between justify-between items-center shadow-lg  bg-[#008080]">
        <div className="xl:pl-8 sm:pl-6 pl-3 gap-8">
          <img width={50} height={50} src="./vite.svg"/>
        </div>
        <div className="xl:gap-36 sm:gap-16 gap-8 xl:pr-8 sm:pr-8 pr-8 flex justify-end items-center">
          <Navbar />
          <button onClick={()=>{navigate("/")}}> Log out </button>
        </div> 
      </div>
    </>
  )
}

export default Header
