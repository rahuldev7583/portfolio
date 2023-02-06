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
      <div className="hidden md:block pt-8 text-3xl">
        <button className="border-2 border-slate-200 text-slate-200 mr-36 rounded-2xl font-rowdy  p-2 hover:bg-slate-200 hover:text-[#71C9CE]">
          <a href="#about">About</a>
        </button>
        <button className="border-2 border-slate-200 text-slate-200 ml-16 rounded-2xl font-rowdy  p-2 hover:bg-slate-200 hover:text-[#71C9CE]">
          <a href="#project">Project</a>
        </button>
        <button className="border-2 border-slate-200 text-slate-200 ml-[15rem] rounded-2xl font-rowdy  p-2 hover:bg-slate-200 hover:text-[#71C9CE]">
          <a href="#contact">Contact</a>
        </button>
      </div>
      <h1 className="text-4xl pt-16 font-pacifico md:text-6xl md:pt-8">
        I'm Rahul Dev
      </h1>
      <p className="font-dance text-3xl font-semibold md:text-5xl">
        a web developer.
      </p>
      <img
        className="w-32 h-42 mt-6 ml-[7rem] p-0.5 bg-slate-100 rounded-full md:w-56 md:ml-[38%]"
        src={Coding}
        alt="codingImg"
      />
      <p className="font-rowdy text-sm mt-4 md:text-xl md:mr-12">
        Frontend Developer
      </p>
      <p className="text-xl mt-12 ml-4 mr-4 w-[90%] font-light font-rowdy text-center leading-8 md:mt-4 md:w-[90%]  md:text-3xl md:ml-16">
        I build responsive and scalable web applications with HTML, CSS and
        JavaScript using frameworks like ReactJS and Tailwind CSS.
      </p>
      <a className="" href="#project">
        <img
          className={"w-16 ml-36 mt-16 md:mt-6 md:ml-[45%] " + anime}
          src={Scroll}
          alt="scroll-icon"
        />
      </a>
    </div>
  );
}
export default Header;
export { Menu };
