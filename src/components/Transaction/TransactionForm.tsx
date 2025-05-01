import { useState } from "react";
import { TrasnactionFormTypes } from "../../features/transaction/TransactionDatasType";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/Store";
import { addNewTransaction } from "../../features/transaction/TransactionSlice";


export const TransactionForm = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [data, setDatas] = useState<TrasnactionFormTypes>({
    title: "",
    amount: null,
    type: "select",
    date: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDatas((prev) => ({ ...prev, [name]: value }));
  };
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDatas((prev) => ({ ...prev, type: e.target.value }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      data.title === "" ||
      data.amount === null ||
      data.type === "select" ||
      data.date === ""
    ) {
      alert("Pls Fill All The Fields");
    } else {
      dispatch(addNewTransaction(data));
      alert("Transactions Added SuccesFully");
      setDatas({
        title: "",
        amount: null,
        type: "select",
        date: "",
      });
    }
  };

  return (
    <>
      <form
        className="flex text-black flex-col w-[90%] md:w-[85%] lg:w-[60%] bg-indigo-300 text-left gap-y-6 p-4 rounded-[20px]"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="flex flex-col md:flex-row ">
          <label className="text-[24px] w-[20%]" htmlFor="title">
            Title {" "}
          </label>{" "}
          <input
            name="title"
            id="title"
            className="border-[1px] px-4 py-2 rounded-[18px] w-[100%] md:w-[60%]"
            type="text"
            placeholder="Title"
            value={data.title}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex flex-col md:flex-row">
          <label className="text-[24px] w-[20%]" htmlFor="amount">
            Amount {" "}
          </label>{" "}
          <input
            name="amount"
            id="amount"
            className="border-[1px] px-4 py-2 rounded-[18px] w-[100%] md:w-[60%]"
            type="number"
            placeholder="amount"
            value={data.amount ?? ""}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex flex-col md:flex-row">
          <label className="text-[24px] w-[20%]" htmlFor="type ">
            Type {" "}
          </label>{" "}
          <select
            className="border-[1px] rounded-full px-4 py-2 w-[100%] md:w-[60%]"
            value={data.type}
            name="type"
            onChange={(e) => handleSelect(e)}
          >
            <option className="border-[1px] " value="select" disabled>
              Select
            </option>
            <option className="border-[1px]" value="income">
              Income
            </option>
            <option className="border-[1px]" value="expense">
              Expense
            </option>
          </select>
        </div>
        <div className="flex flex-col md:flex-row">
          <label className="text-[24px] w-[20%]" htmlFor="data">
            Date {" "}
          </label>{" "}
          <input
            name="date"
            id="date"
            className="border-[1px] px-4 py-2 rounded-[18px] w-[100%] md:w-[60%]"
            type="date"
            placeholder="date"
            value={data.date}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex justify-center">
          <button
            className="w-[60%] hover:bg-purple-700 hover:text-white border-[1px] mt-[10px] px-6 py-2 rounded-full"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};
