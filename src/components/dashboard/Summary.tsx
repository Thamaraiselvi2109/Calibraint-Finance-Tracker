import { useSelector } from "react-redux";
import { SummaryCard } from "./SummaryCard";
import {  RootState } from "../../store/Store";


export const Summary = () => {
  const allTransactions = useSelector(
    (state: RootState) => state.transaction.allTransactions
  );


  //Income
  const income = allTransactions.filter((data) => data.type === "income");
  const totalIncome = income.reduce((acc, cur) => acc + Number(cur.amount), 0);
  console.log(totalIncome)
  console.log(typeof(totalIncome))

  // Expense
  const expense = allTransactions.filter((data) => data.type === "expense");
  const totalExpense = expense.reduce((acc, cur) => acc + cur.amount, 0);

  const allSummary = [
    {
      id: 1,
      title: "Total Income",
      total: totalIncome,
      color: "bg-blue-800",
    },
    {
      id: 2,
      title: "Total Expense",
      total: totalExpense,
      color: "bg-pink-600",
    },
    {
      id: 3,
      title: "Total Balence",
      total: totalIncome - totalExpense,
      color: "bg-purple-800",
    },
  ];

  return (
    <>
      <div className="mt-4">
        <div className="bg-zinc-900 rounded-[20px] px-4 py-8">
          <h5 className="text-[25px] font-bold">Summary</h5>
          {/* {Total balances} */}
          <div className="flex flex-col  md:flex-row lg:flex-row xl:flex-row justify-around gap-y-6 gap-x-6 py-6">
            {allSummary.map((card) => (
              <SummaryCard
                key={card.id}
                id={card.id}
                title={card.title}
                total={card.total}
                color={card.color}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
