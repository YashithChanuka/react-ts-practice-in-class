import { Component } from "react";
import { NavLink } from "react-router-dom";
import UserImage from "./../../assets/user.png";
import LogoutIcon from "@mui/icons-material/Logout";

export default class Header extends Component {
  render() {
    const activeLink = "border-b-2 cursor-pointer";
    const normalLink = "cursor-pointer";

    return (
      <div className="bg-accent-navy-200 h-20 w-full text-white fixed top-0 p-4">
        <div className="w-full h-full">
          <div className="flex w-full h-full items-center">
            <div className="w-1/2">
              <h1 className="font-babylonica">MyFeed.com</h1>
            </div>
            <div className="w-1/2">
              <nav className="flex w-full justify-between items-center font-heading">
                <NavLink
                  to={"/home"}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to={"/about"}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  About
                </NavLink>
                <NavLink
                  to={"/contact"}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Contact
                </NavLink>
                <NavLink to={"/profile"}>
                  <img src={UserImage} alt="userImage" className="w-10 h-10" />
                </NavLink>
                <NavLink to={"/"} className="cursor-pointer">
                  <LogoutIcon />
                </NavLink>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
