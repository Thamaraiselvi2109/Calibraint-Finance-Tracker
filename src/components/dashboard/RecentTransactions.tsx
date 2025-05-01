import { RecentTransactionCards } from "./RecentTransactionCards";

export const RecentTransactions = () => {
  return (
    <>
      {/* {Recent Transactions} */}
      <div className="mt-4">
        <div className="bg-zinc-900 rounded-[20px] px-4 py-8">
          <h5 className="text-[25px] font-bold py-4">Recent Transactions</h5>
          <RecentTransactionCards/>
        </div>
      </div>
    </>
  );
};
