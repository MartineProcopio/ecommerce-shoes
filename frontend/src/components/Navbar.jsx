import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";


const links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "shop",
    link: "/shop",
  },
  {
    name: "orders",
    link: "/orders",
  },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
  });

  const detectSize = () => {
    setWindowDimension({
      width: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    windowDimension.width > 768 && setIsMenuOpen(true);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimension.width]);

  return (
    <div
      className={
        isMenuOpen || windowDimension.width > 768
          ? "border-b-[1px] border-b-solid  md:flex-row  md:justify-evenly   md:h-[50px] md:w-[100%] md:bg-none border-b-slate-600 flex absolute  flex-col items-center justify-around h-screen w-screen bg-gradient-to-t from-[#FFB8B8] to-[#1E1E1E]"
          : "flex  absolute items-center justify-around  h-[50px] w-[100%] "
      }
    >
      {!isMenuOpen && (
        <>
          <AiOutlineMenu
            cursor={"pointer"}
            className={"md:hidden"}
            onClick={() => setIsMenuOpen(true)}
            color="#f1f1f1"
            size={25}
          />

          <p className="text-xl text-gray-100 font-semibold ">
            Ecommerce Shoes
          </p>

          <AiOutlineShoppingCart
            onClick={() => navigate("/cart")}
            cursor={"pointer"}
            color="#f1f1f1"
            size={25}
          />

        </>
      )}
      {isMenuOpen && (
        <>
          {links.map((l) => (
            <Link
              className="flex md:text-[20px] md:pl-0 md:font-medium pl-10 md:pr-0 pr-10 text-2xl font-semibold  text-[#f1f1f1]"
              to={`${l.link}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {l.name}
            </Link>
          ))}

          <div className="flex pt-10">
            <AiOutlineClose
              color="#f1f1f1"
              size={30}
              className={"md:hidden"}
              cursor={"pointer"}
              onClick={() => setIsMenuOpen(false)}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default NavBar;