import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { users, logout } = UserAuth();
  // console.log(users);
  const navigate = useNavigate();

  const hanlelogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 absolute w-full z-[100]">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          NETFLIX
        </h1>
      </Link>

      <div>
        {users?.email ? (
          <div>
            <Link to="/account">
              <button className="text-white pr-4 font-bold">Account</button>
            </Link>

            <button
              onClick={hanlelogout}
              className="bg-red-600 rounded text-white px-6 py-2 cursor-pointer font-bold"
            >
              Logout
            </button>
          </div>
        ) : (
          <div>
            <Link to="/login">
              <button className="text-white pr-4 font-bold">Signin</button>
            </Link>
            <Link to="/signup">
              <button className="bg-red-600 rounded text-white px-6 py-2 cursor-pointer font-bold">
                Singup
              </button>
            </Link>{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
