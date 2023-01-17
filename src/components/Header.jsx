import { useState } from "react";
import Menu from "./Menu/Menu.jsx";
import Coding from "./laptop.png";
import Scroll from "./down-arrow.png";

function Header() {
  const [anime, setAnime] = useState(" animate-bouncepic");
  return (
    <div id="about" className="bg-[#71C9CE] text-slate-200 h-screen">
      <Menu
        anime={() =>
          anime !== "" ? setAnime("") : setAnime(" animate-bouncepic")
        }
      />
      <h1 className="text-4xl pt-16 font-pacifico ">I'm Rahul Dev</h1>
      <p className="font-dance text-3xl font-semibold ">a web developer.</p>
      <img
        className="w-32 h-42 mt-6 ml-[7.5rem] p-0.5 bg-slate-100 rounded-full"
        src={Coding}
        alt="codingImg"
      />
      <p className="font-rowdy text-base mt-4">Frontend Developer</p>
      <p className="text-xl mt-12 ml-6 w-80 font-light font-rowdy text-center leading-8">
        I build responsive websites with HTML, CSS and JavaScript using
        frameworks like ReactJS and Tailwind css.
      </p>
      <a className="" href="#project">
        <img
          className={"w-16  ml-36 mt-28" + anime}
          src={Scroll}
          alt="scroll-icon"
        />
      </a>
    </div>
  );
}
export default Header;
export { Menu };
