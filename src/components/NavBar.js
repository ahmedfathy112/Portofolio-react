import { Link } from "react-router-dom";
function NavBar() {
  return (
    <>
      <nav className="w-[560px] h-28 bg-black rounded-2xl z-10 fixed left-[30%] flex flex-row bottom-1 justify-center max-md:left-0 max-md:w-full">
        <Link
          to="/"
          className="m-[20px] max-md:m-[10px] cursor-pointer w-[84px] max-md:w-[70px] h-[84px] bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex justify-center items-center flex-col"
        >
          <i className="fa-solid fa-house-chimney-window text-white text-[25px]"></i>
          <h2 className="text-center text-white text-[18px] font-medium font-['Poppins'] mt-2">
            Home
          </h2>
        </Link>
        <Link
          to="/About"
          className="m-[20px] max-md:m-[10px] cursor-pointer w-[84px] max-md:w-[70px] h-[84px] bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex justify-center items-center flex-col"
        >
          <i className="fa-regular fa-user text-white text-[25px] font-light"></i>
          <h2 className="text-center text-white text-[18px] font-medium font-['Poppins'] mt-2">
            About
          </h2>
        </Link>
        <Link
          to="/Resume"
          className="m-[20px] max-md:m-[10px] cursor-pointer w-[84px] max-md:w-[70px] h-[84px] bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex justify-center items-center flex-col"
        >
          <i className="fa-brands fa-dochub text-white text-[25px] font-light"></i>
          <h2 className="text-center text-white text-[18px] font-medium font-['Poppins'] mt-2">
            Resume
          </h2>
        </Link>
        <Link
          to="/Projects"
          className="m-[20px] max-md:m-[10px] cursor-pointer w-[84px] max-md:w-[70px] h-[84px] bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex justify-center items-center flex-col"
        >
          <i className="fa-solid fa-briefcase text-white text-[25px] "></i>
          <h2 className="text-center text-white text-[18px] font-medium font-['Poppins'] mt-2">
            Projects
          </h2>
        </Link>
        <Link
          to="/Contact"
          className="m-[20px] max-md:m-[10px] cursor-pointer w-[84px] max-md:w-[70px] h-[84px] bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex justify-center items-center flex-col"
        >
          <i className="fa-solid fa-address-book text-white text-[25px] font-light"></i>
          <h2 className="text-center text-white text-[18px] font-medium font-['Poppins'] mt-2">
            Contact
          </h2>
        </Link>
      </nav>
    </>
  );
}

export default NavBar;
