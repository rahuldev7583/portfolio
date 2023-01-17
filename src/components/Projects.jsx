import Weather from "./weather.jpg";
import Tictactoe from "./tictactoe.jpg";
import Todo from "./todo.jpg";
function Projects() {
  return (
    <div id="project" className="bg-slate-200 text-[#71C9CE] pt-8 pb-8 ">
      <h1 className="font-rowdy text-2xl ml-6">Here are my projects</h1>
      <div className="ml-14 mt-6 pt-4 pl-2 pr-2 bg-[#CBF1F5] text-[#71C9CE] w-64 rounded-2xl">
        <p className="font-medium">
          This is Tic Tac Toe game built with React js and Tailwind CSS.
        </p>
        <a href="https://dapper-lily-47f09f.netlify.app/">
          <img
            className="w-52 rounded-3xl ml-4 mt-4"
            src={Tictactoe}
            alt="tictactoeImg"
          />
          <button className="bg-[#71C9CE] text-slate-200 rounded-2xl font-bold text-xl  mt-4 mb-4 pt-2 pb-2 pl-6 pr-6 hover:bg-gray-300 hover:text-[#71C9CE]">
            visit
          </button>
        </a>
      </div>
      <div className="ml-14 mt-6 pt-4 pl-2 pr-2 bg-[#CBF1F5] text-[#71C9CE] w-64 rounded-2xl">
        <p className="font-medium">
          This is a Todo app for manage tasks built with React js and Tailwind
          CSS.
        </p>
        <a href="https://frolicking-granita-2a5565.netlify.app/">
          <img
            className="w-52 rounded-3xl ml-4 mt-4"
            src={Todo}
            alt="todoImg"
          />
          <button className="bg-[#71C9CE] text-slate-200 rounded-2xl font-bold text-xl  mt-4 mb-4 pt-2 pb-2 pl-6 pr-6 hover:bg-gray-300 hover:text-[#71C9CE]">
            visit
          </button>
        </a>
      </div>
      <div className="ml-14 mt-6 pt-4 pl-2 pr-2 bg-[#CBF1F5] text-[#71C9CE] w-64 rounded-2xl">
        <p className="font-medium">
          This is a Weather app built with React js and Tailwind CSS.
        </p>
        <a href="https://phenomenal-basbousa-3bc1b6.netlify.app/">
          <img
            className="w-52 rounded-3xl ml-4 mt-4"
            src={Weather}
            alt="weatherImg"
          />
          <button className="bg-[#71C9CE] text-slate-200 rounded-2xl font-bold text-xl  mt-4 mb-4 pt-2 pb-2 pl-6 pr-6 hover:bg-gray-300 hover:text-[#71C9CE]">
            visit
          </button>
        </a>
      </div>
    </div>
  );
}
export default Projects;
