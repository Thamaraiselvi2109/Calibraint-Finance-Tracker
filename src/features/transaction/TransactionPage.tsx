import { Navbar } from "../../components/navbar/Navbar";
import { AllTransactions } from "../../components/Transaction/AllTransactions";
import { TransactionForm } from "../../components/Transaction/TransactionForm";

export const TransactionPage = () => {
  return (
    <>
      <Navbar />
      <h1 className="text-[35px] py-5">Add New Transactions</h1>
      <div className="flex justify-center">
      <TransactionForm />
      </div>
      <div>
      <AllTransactions />
      </div>
    </>
  );
};
