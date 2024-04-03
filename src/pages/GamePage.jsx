import React from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Cat from "../assets/Cat.jpeg";
import Reshuffle from "../assets/Resfuffle.jpeg";
import Defuse from "../assets/Defuse.jpeg";
import Bomb from "../assets/Bomb.jpeg";
import Card from "../components/Card";
import leader from "../assets/winner.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import trophy from "../assets/trophy.gif";

function GamePage() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [currentScore, setCurrentScore] = useState(0);

  const userName = useSelector((state) => {
    return state.newUser.userName;
  });
  const userAvatar = useSelector((state) => {
    return state.newUser.userAvatar;
  });
  const startGame = () => {
    setIsModalOpen(!isModalOpen);
  };
  const cardData = {
    card1: {
      name: "Reshuffle Card",
      image: Reshuffle,
      description: "Sorry you have to start the game again 😿",
    },
    card2: {
      name: "Cat Card",
      image: Cat,
      description: "The kitty Says hi to you 😺",
    },
    card3: {
      name: "Defuse Card",
      image: Defuse,
      description: "Congrats you are safe against the bomb 🎉",
    },
    card4: {
      name: "Bomb Card",
      image: Bomb,
      description: "Sorry you lost 💣",
    },
  };

  return (
    <div className="overflow-hidden min-h-screen min-w-full flex flex-col bg-my-bg">
      <div className="relative flex items-center justify-center bg-gradient-bl from-blue-900 to-purple-900">
        <nav className="absolute flex flex-row justify-between rounded-2xl w-11/12  mt-20 px-4  min-h-12 bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-xl border-2 border-solid border-purple-500  shadow-purple-800">
          <Link to={"/"}>
            <p className="text-xl font-bold text-slate-100 pt-2">Kitty Game</p>
          </Link>
          <div className="hidden lg:h-12 lg:w-12 md:h12 ,md:w-12">
            {/*Image goes here*/}
          </div>
          <div className="  items-center justify-center flex-row  gap-6  bg-gradient-to-br rounded-2xl lg:flex md:flex hidden">
            <div className="w-10 h-10 rounded-full ">
              <img
                className="rounded-full ring-2 ring-white"
                src={userAvatar}
                alt="avatar"
              />
            </div>
            <p className="text-3xl font-bold text-white ">{userName}</p>
            <div className="font-mono px-2 gap-2 font-semibold text-3xl text-white flex felx-row items-center rounded-2xl bg-white">
              <img src={trophy} alt="trophy" className="rounded-full h-8 w-8" />
              <p className="text-black">{currentScore}</p>
            </div>
          </div>

          <div>
            <Link to={"/leaderBoard"}>
              <motion.img
                whileHover={{ scale: 1.1, shadow: "2xl", cursor: "pointer" }}
                src={leader}
                alt="leader"
                className="h-12 w-12"
              />
            </Link>
          </div>
        </nav>
        <div className="fixed flex items-center justify-center flex-row top-28 gap-6 md:hidden lg:hidden bg-gradient-to-br from-pink-300 via-teal-300 to-cyan-400 p-2 rounded-2xl">
          <div className="w-10 h-10 rounded-full ">
            <img
              className="rounded-full ring-2 ring-white"
              src={userAvatar}
              alt="avatar"
            />
          </div>
          <p className="text-3xl font-bold text-white bg-gradient-to-tr from-red-600 via-yellow-500 to-purple-600 bg-clip-text text-transparent">
            {userName}
          </p>
          <div className="font-mono font-semibold text-3xl text-white">
            {currentScore}
          </div>
        </div>
      </div>
      <div className="relative flex items-center justify-center  ml-auto mr-auto  ">
        {Object.keys(cardData).map((key) => (
          <div className="absolute mt-52 top-1 ">
            <Card key={key} data={cardData[key]} />
          </div>
        ))}
      </div>
      <AnimatePresence mode="popLayout">
        {isModalOpen && (
          <motion.div
            initial={{
              scale: 1,
              y: 0,
            }}
            animate={{
              scale: 1,
              y: [-500, 0],
            }}
            exit={{
              y: [0, 1000],
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className={`fixed inset-0 flex items-center justify-center z-50 ${
              isModalOpen ? "block" : "hidden"
            }`}
          >
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="fixed z-50 bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center justify-center text-xl font-bold mb-4">
                <p>Start you journey! 🐱</p>
              </div>
              <p className="mb-4 text-wrap">
                {" "}
                Gain Points by saving the kitties
                <br />& Drawing all the cards
              </p>
              <div className="flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9, rotate: 10 }}
                  onClick={startGame}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  Start Game
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default GamePage;
