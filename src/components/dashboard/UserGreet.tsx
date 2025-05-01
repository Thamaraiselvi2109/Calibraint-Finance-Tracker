import { useSelector } from "react-redux";
import { RootState } from "../../store/Store";

export const UserGreet = () => {
const name = useSelector((state:RootState)=> state.auth.userName)
  return (
    <>
      <h1 className="text-[25px] text-left">
        Hello{" "}
        <span className="font-bold px-2 rounded-[8px] leading-[20px] bg-linear-to-bl from-violet-500 to-fuchsia-500">
          {name? name : ""}!
        </span>
        <br /> Welcome To Finance Tracker
      </h1>
    </>
  );
};
