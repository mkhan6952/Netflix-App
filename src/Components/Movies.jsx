import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { async } from "@firebase/util";

const Movies = ({ item }) => {
  const [likes, setLikes] = useState(false);
  const [save, setsave] = useState(false);

  const { users } = UserAuth();

  const movieid = doc(db, "users", `${users?.email}`);

  const saveshow = async () => {
    if (users?.email) {
      setLikes(!likes);
      setsave(true);

      await updateDoc(movieid, {
        savedshows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert("please login to save movie into your Account");
    }
  };

  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block relative cursor-pointer ">
      <img
        className="w-full h-auto block "
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white ">
        <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center ">
          {item?.title}
        </p>
        <p onClick={saveshow}>
          {likes ? (
            <FaHeart className="absolute top-4 left-4 text-gray-400 " />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 text-gray-400 " />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movies;
