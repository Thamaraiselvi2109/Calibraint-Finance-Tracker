import { RecentTransactions } from "../../components/dashboard/RecentTransactions";
import { Summary } from "../../components/dashboard/Summary";
import { UserGreet } from "../../components/dashboard/UserGreet";
import { Navbar } from "../../components/navbar/Navbar";

export const DashboardPage = () => {
  console.log(localStorage.getItem("token"))
  return (
    <>
      <Navbar />
      <div className="border-[1px] rounded-[20px] py-4 px-4">
        <div>
          <UserGreet />
        </div>
        <div>
            <Summary/>
        </div>
        <div>
          <RecentTransactions/>
        </div>
      </div>
    </>
  );
};
