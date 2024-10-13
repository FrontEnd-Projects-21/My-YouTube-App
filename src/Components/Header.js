import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/AppSlice";

const Header = () => {
  const dispatch = useDispatch();
  const handleMenuClick = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col shadow-xl p-4">
      <div className="flex h-10 grid-cols-1">
        <img
          className="cursor-pointer"
          onClick={() => handleMenuClick()}
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/non_2x/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
          alt="menu-icon"
        />
        <img
          src="https://t4.ftcdn.net/jpg/06/09/13/31/360_F_609133122_u5vaiyCHsL5UqtdrSNrV5llL2JC1oYWi.jpg"
          alt="youtube-logo"
        />
      </div>
      <div className="grid-cols-10 h-10">
        <input
          type="text"
          className="w-96 rounded-l-full p-1 border border-gray-400 border-solid"
          placeholder="Search..."
        />
        <button className="rounded-r-full p-1 border  border-gray-400 border-solid">
          🔍
        </button>
      </div>
      <div className="grid-cols-1 ">
        <img
          className="h-10 float-end "
          src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Header;
