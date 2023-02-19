import Gmail from "./email.png";
import Twitter from "./twitter.png";
import GitHub from "./github.png";
import Medium from "./medium.png";

function Bottom() {
  return (
    <div
      id="contact"
      className="relative text-slate-200 bg-[#71C9CE] text-cent pt-2 md:pt-4"
    >
      <p className="font-medium text-xl mb-2 md:text-2xl">connect with me</p>
      <ul className="flex mb-2 md:ml-[30%]">
        <li>
          <a href="mailto: rahuldev2714@gmail.com" className="">
            <div className="border border-solid-200 p-1 bg-slate-200 rounded-full ml-10">
              <img className="w-8 md:w-12" src={Gmail} alt="GmailIcon" />
            </div>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/iamrahul_dev">
            <img
              className="ml-10 w-10 md:w-16"
              src={Twitter}
              alt="TwitterIcon"
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/rahuldev7583">
            <img
              className="ml-10 w-10 md:w-16"
              src={GitHub}
              alt="GitHub Icon"
            />
          </a>
        </li>
        <li>
          <a href="https://medium.com/@rahuldev7583">
            <img
              className="ml-10 w-10 border border-solid-200 rounded-full bg-slate-200 p-1 md:w-16"
              src={Medium}
              alt="MediumIcon"
            />
          </a>
        </li>
      </ul>
      <p className="text-sm md:text-lg">
        © 2023 Rahul Dev. All right reserved.
      </p>
    </div>
  );
}
export default Bottom;
