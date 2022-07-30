import React from "react";
import SavedShows from "../Components/SavedShows";

const Account = () => {
  return (
    <>
      <div className="w-full text-white ">
        <img
          className=" w-full h-[370px] object-cover "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c2578c37-8569-4f88-b8f1-67a26a9ddcdd/f2740ff3-b308-4314-949b-ceec461ea44d/PK-en-20220725-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="/"
        />
        <div className="bg-black/70 fixed top-0 left-0 w-full h-[370px] "></div>
        <div className="absolute top-[20%] p-4 md:p-8 ">
          <h1 className="text-5xl font-bold">My Shows</h1>
        </div>
      </div>
      <SavedShows />
    </>
  );
};

export default Account;
