import Log_in from "../components/log_in";
import Pictures from "../components/logo";

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center bg-slate-200">
        <div className="w-[1000px] h-[34rem] flex rounded-xl">
          <div className="w-1/2 h-full">
            <Log_in />
          </div>
          <div className=" w-1/2 h-full">
            <Pictures />
          </div>
        </div>
      </div>
    </>
  );
}
