import { Logout } from "./Logout";
import profile_img from '../../assets/profile.png'
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="flex pb-6">
        <div className="w-[50%] text-start flex items-center">
          <h2 className="text-[25px]">Finance Tracker</h2>
        </div>
        <div className="w-[50%] text-end flex justify-end gap-x-6 items-center">
          <div className="flex gap-x-4">
            <Link  className="text-[17px] hover:bg-violet-900 border-[1px] px-4 py-1 rounded-full" to='/transaction' >Transaction</Link>
            <Link  className="text-[17px] hover:bg-violet-900 border-[1px] px-4 py-1 rounded-full" to='/' >Dashboard</Link>
          </div>
          <div className="h-[45px] w-[45px] rounded-[50px] p-[3px] bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90%">
            <img src={profile_img} alt="Profile_img" />
          </div>
          <Logout />
        </div>
      </div>
    </>
  );
};
