import Weather from "./weather.jpg";
import Tictactoe from "./tictactoe.jpg";
import Todo from "./todo.jpg";
import Rock from "./rock.jpg";
import Calculator from "./calculator.jpg";
import Age from "./age.jpg";
import Spotify from "./spotify.jpg";

function Projects() {
  return (
    <div id="project" className="bg-slate-200 text-[#71C9CE] pt-8 pb-8 ">
      <h1 className="font-rowdy text-2xl ml-6">Here are my projects</h1>
      <h1 className="mt-2 text-2xl font-bold">ReactJS Projects</h1>
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
      <h1 className="text-xl mt-8 font-bold">Vanilla JavaScript Projects</h1>
      <div className="ml-14 mt-6 pt-4 pl-2 pr-2 bg-[#CBF1F5] text-[#71C9CE] w-64 rounded-2xl">
        <p className="font-medium">
          This is a rock paper and scissors game built with plain js and CSS.
        </p>
        <a href="https://rahuldev7583.github.io/rock_paper_scissors/">
          <img
            className="w-52 rounded-3xl ml-4 mt-4"
            src={Rock}
            alt="rockImg"
          />
          <button className="bg-[#71C9CE] text-slate-200 rounded-2xl font-bold text-xl  mt-4 mb-4 pt-2 pb-2 pl-6 pr-6 hover:bg-gray-300 hover:text-[#71C9CE]">
            visit
          </button>
        </a>
      </div>
      <div className="ml-14 mt-6 pt-4 pl-2 pr-2 bg-[#CBF1F5] text-[#71C9CE] w-64 rounded-2xl">
        <p className="font-medium">
          This is a Spotify clone built with plain js and CSS.
        </p>
        <a href="https://rahuldev7583.github.io/Spotify-clone/">
          <img
            className="w-52 rounded-3xl ml-4 mt-4"
            src={Spotify}
            alt="SpotifyImg"
          />
          <button className="bg-[#71C9CE] text-slate-200 rounded-2xl font-bold text-xl  mt-4 mb-4 pt-2 pb-2 pl-6 pr-6 hover:bg-gray-300 hover:text-[#71C9CE]">
            visit
          </button>
        </a>
      </div>
      <div className="ml-14 mt-6 pt-4 pl-2 pr-2 bg-[#CBF1F5] text-[#71C9CE] w-64 rounded-2xl">
        <p className="font-medium">
          This is a Calculator built with plain js and CSS.
        </p>
        <a href="https://rahuldev7583.github.io/calculator/">
          <img
            className="w-52 rounded-3xl ml-4 mt-4"
            src={Calculator}
            alt="calculatorImg"
          />
          <button className="bg-[#71C9CE] text-slate-200 rounded-2xl font-bold text-xl  mt-4 mb-4 pt-2 pb-2 pl-6 pr-6 hover:bg-gray-300 hover:text-[#71C9CE]">
            visit
          </button>
        </a>
      </div>
      <div className="ml-14 mt-6 pt-4 pl-2 pr-2 bg-[#CBF1F5] text-[#71C9CE] w-64 rounded-2xl">
        <p className="font-medium">
          This is a Age calculator built with plain js and CSS.
        </p>
        <a href="https://rahuldev7583.github.io/age-calculator/">
          <img className="w-52 rounded-3xl ml-4 mt-4" src={Age} alt="ageImg" />
          <button className="bg-[#71C9CE] text-slate-200 rounded-2xl font-bold text-xl  mt-4 mb-4 pt-2 pb-2 pl-6 pr-6 hover:bg-gray-300 hover:text-[#71C9CE]">
            visit
          </button>
        </a>
      </div>
      <p className="mt-8 text-2xl font-semibold font-rowdy">
        Visit All projects here
      </p>
      <a
        className="bg-[#71C9CE] text-slate-200 text-2xl p-2 rounded-xl font-bold"
        href="https://github.com/rahuldev7583"
      >
        <button className="mt-6">All projects</button>
      </a>
    </div>
  );
}
export default Projects;
