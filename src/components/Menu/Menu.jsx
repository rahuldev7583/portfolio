import { useState } from "react";

function Menu(props) {
  const [showOption, setShowOption] = useState(false);

  return showOption ? (
    <div
      className="w-full h-full fixed bg-[#CBF1F5] pt-2 pl-2 pr-10 pb-2 text-[#71C9CE] text-2xl font-rowdy font-bold"
      onClick={() => {
        setShowOption(false);
        props.anime();
      }}
    >
      <a className="" href="#about">
        <p className="mt-10">About</p>
      </a>
      <p className="absolute top-12 right-10">X</p>
      <a className="" href="#project">
        <p className="mt-2">Project</p>
      </a>
      <a className="" href="#contact">
        <p className="mt-2">Contact</p>
      </a>
    </div>
  ) : (
    <div
      className="fixed right-px top-2 pt-0.5 pb-2 pr-2 pl-2 rounded-xl bg-[#71C9CE]"
      onClick={() => {
        setShowOption(true);
        props.anime();
      }}
    >
      <div className="w-[30px] h-[4px] bg-slate-100 rounded mt-2"></div>
      <div className="w-[20px] h-[4px] bg-slate-100 rounded mt-2"></div>
    </div>
  );
}
export default Menu;
