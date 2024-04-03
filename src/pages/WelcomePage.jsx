import React, { useState } from "react";
import { useDispatch } from "react-redux";
import defaultAvatar from "../assets/defaultAvatar.avif";
import { avatars } from "../avatars";
import { addUser, addUserAvatar } from "../slice/AddUserSlice";
import { redirect, useNavigate } from "react-router-dom";

function WelcomePage() {
  const dispatch = useDispatch();
  const availableAvatars = avatars;
  const [openAvatar, setOpenAvatar] = useState(false);
  const handleClick = (e) => {
    setOpenAvatar(!openAvatar);
  };
  const [currentAvatar, setCurrentAvatar] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({ userName: e.target.username.value }));

    currentAvatar
      ? dispatch(addUserAvatar({ userAvatar: currentAvatar }))
      : dispatch(addUserAvatar({ userAvatar: defaultAvatar }));

    navigate("/game", { replace: true });
  };

  const avatarSelect = (avatar) => {
    setOpenAvatar(!openAvatar);
    setCurrentAvatar(avatar);
  };

  return (
    <div className="bg-gradient-to-br from-indigo-950 to-purple-950 overflow-hidden flex flex-col items-center justify-center min-h-screen">
      <div className="">
        <div className="relative flex flex-col items-center justify-center">
          <div className="text-3xl lg:text-5xl md:text-4xl font-bold text-white mb-4 ml-auto mr-auto pb-8">
            Welcome to Card Game
          </div>
          <div className="lg:w-60 lg:h-60 md:h-50 md:w-50 ml-auto mr-auto flex items-center justify-center w-48 h-48 bg-gradient-to-r from-purple-400  to-cyan-500 ring-2 ring-blue-600 rounded-full mb-4 shadow-lg shadow-blue-600">
            <div className="rounded-full bg-white min-w-44 min-h-44 lg:w-52 lg:h-52 md:w-40 md:h-40">
              {currentAvatar ? (
                <img
                  onClick={handleClick}
                  className="object-cover rounded-full w-44 h-44 lg:w-52 lg:h-52 md:w-40 md:h-40"
                  src={currentAvatar}
                  alt="avatar"
                />
              ) : (
                <img
                  onClick={handleClick}
                  className="object-cover rounded-full w-44 h-44 lg:w-52 lg:h-52 md:w-40 md:h-40"
                  src={defaultAvatar}
                  alt="avatar"
                />
              )}
            </div>
          </div>
          {openAvatar && (
            <div className="absolute min-w-72 min-h-96 backdrop-blur-3xl bg-transparent shadow-xl shadow-black backdrop-opacity-70  rounded-2xl ">
              <div className="relative grid grid-flow-row  grid-cols-2 gap-8 p-4 backdrop-blur-md ">
                {availableAvatars.map((avatar, index) => (
                  <div className="ring-4 ring-purple-500 rounded-full">
                    <img
                      onClick={() => avatarSelect(avatar)}
                      className="w-32 h-32 rounded-full cursor-pointer"
                      src={avatar}
                      alt="alter"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="text-xl lg:text-3xl md:text-2xl font-medium text-white mb-4 ml-auto mr-auto pt-8 pb-4">
            Enter your name to start playing
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className="font-medium  text-lg flex items-center justify-center w-80 lg:w-96 md:w-96 h-12 bg-gradient-to-r from-purple-400  to-cyan-500 ring-2 appearance-none ring-blue-600 rounded-2xl p-2 text-black focus:outline-none focus:ring-2 focus:ring-purple-600"
          type="text"
          name="username"
          placeholder="Enter your name"
          pattern="^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$"
        />
      </form>
    </div>
  );
}

export default WelcomePage;
