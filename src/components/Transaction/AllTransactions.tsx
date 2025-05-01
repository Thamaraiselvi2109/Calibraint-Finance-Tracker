import { useState } from "react";
import { Filter } from "./Filter";
import { SingleCardTransaction } from "./SingleCardTransaction";
import { useSelector } from "react-redux";
import { selectAllTransaction } from "../../features/transaction/TransactionSlice";

export const AllTransactions = () => {
  const [selectedType, setselectedType] = useState<string>("all");
  const [selectedDate, setselectedDate] = useState<string>("all");
  const transData = useSelector(selectAllTransaction);
  const orderedData = [...transData].reverse();

  const filteredTransactions =
    selectedType === "all"
      ? orderedData
      : [...orderedData].filter((data) => data.type === selectedType);


if (selectedDate === "newest") {
  filteredTransactions.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);
} else if (selectedDate === "oldest") {
  filteredTransactions.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
);
}
  return (
    <>
      <h1 className="text-[35px] py-5">All Transactions</h1>
      <div className="flex justify-end">
        <Filter setType={setselectedType} setDate={setselectedDate} />
      </div>
      <SingleCardTransaction data={filteredTransactions} />
    </>
  );
};
