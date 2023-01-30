import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

import DarkLightMode from "../components/DarkLightMode";
import FontChange from "../components/FontChange";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-[#ffad00]" : ""} 
      hover:text-[#ffad00] transition duration-500
    `}
      href={`#${lowerCasePage}`}
      onClick={() => selectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

  return (
    <nav className="flex justify-between items-center top-[36px] z-[100] bg-[#2E231E]">
      <div className="w-[171px] h-[46px] my-[5px] mx-[30px]">
        <img src="assets\img\logo.svg" alt="Logotipo do Insep" />
        {/*Desktop Nav */}
      </div>
      {isAboveSmallScreens ? (
        <ul className="menu-nav flex items-center gap-6 m-[10px]">
          <li className="font-Lexend flex gap-6 font-normal leading-5 items-center tracking-[0.15px] text-[16px] text-white">
            <Link
              page="Quem Somos"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              className="order-0"
            />
            <Link
              page="Faça parte"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              className="order-1"
            />
            <Link
              page="Contatos"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              className="order-2"
            />
          </li>
          <button
            role="button"
            className="btn font-Lexend bg-[#fafcff] 
            py-[10px] px-[16px] tracking-[0.1px] text-center 
            font-medium text-[14px] items-center rounded-[100px] 
            w-[79px] h-[40px] cursor-pointer order-3"
          >
            Cursos
          </button>
          <FontChange />

          <DarkLightMode />
        </ul>
      ) : (
        <button
          className="rounded-full bg-[#FEAC39] p-2 m-3"
          onClick={() => setIsMenuToggled(!isMenuToggled)}
        >
          <img alt="menu-icon" src="./assets/img/menu-icon.svg" />
        </button>
      )}
      {/* Mobile Menu Pop */}
      {!isAboveSmallScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 h-full bg-[#46382f] w-[300px]">
          {/* Close Icon */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <img src="./assets/img/close-icon.svg" alt="Close-icon" />
            </button>
          </div>
          {/* Menu Items */}
          <div className="flex flex-col gap-10 ml-[33%] text-2xl text-white">
            <Link
              page="Quem Somos"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              className="order-0"
            />
            <Link
              page="Faça parte"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              className="order-1"
            />
            <Link
              page="Contatos"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              className="order-2"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
