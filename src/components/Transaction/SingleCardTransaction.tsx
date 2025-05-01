import { useDispatch } from "react-redux";
import {
  removeTransaction,
  updateTransaction,
} from "../../features/transaction/TransactionSlice";
import { AppDispatch } from "../../store/Store";
import {
  TransactionsTypes,
  TrasnactionFormTypes,
} from "../../features/transaction/TransactionDatasType";
import { useState } from "react";

interface Props {
  data: TransactionsTypes[];
}

export const SingleCardTransaction = ({ data }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const [editId, setEditId] = useState<number | null>(null);
  const [editData, setEditData] = useState<TrasnactionFormTypes>({
    title: "",
    amount: null,
    type: "income",
    date: "",
  });

  const handleDelete = (id: number) => {
    dispatch(removeTransaction(id));
  };

  const handleEdit = (card: TransactionsTypes) => {
    setEditId(card.id);
    setEditData({
      title: card.title,
      amount: card.amount,
      type: card.type,
      date: card.date,
    });
  };

  const handleCancel = () => {
    setEditId(null);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (editId !== null) {
      dispatch(updateTransaction({ id: editId, ...editData }));
      setEditId(null);
    }
  };


  return (
    <div className="flex flex-col md:flex-row md:flex-wrap gap-y-4 gap-x-4 justify-around">
      {data.length === 0 ? <h1 className="animate-pulse">No data found</h1> : (data.map((card) => (
        <div
          className="border-[1px] rounded-[20px] w-[100%] md:w-[45%] lg:w-[50%] p-4 hover:bg-zinc-900"
          key={card.id}
        >
          {/* TITLE */}
          <div className="flex items-center">
            <p className="text-[20px] pr-2">Title:</p>
            {editId === card.id ? (
              <input
                name="title"
                className="border px-2 py-1 rounded w-full"
                value={editData.title}
                onChange={handleChange}
              />
            ) : (
              <h2 className="text-[20px]">{card.title}</h2>
            )}
          </div>

          {/* AMOUNT */}
          <div className="flex items-center">
            <p className="text-[20px] pr-2">Amount:</p>
            {editId === card.id ? (
              <input
                name="amount"
                type="number"
                className="border px-2 py-1 rounded w-full"
                value={editData.amount ?? ""}
                onChange={handleChange}
              />
            ) : (
              <h2 className="text-[20px]">{card.amount}</h2>
            )}
          </div>

          {/* TYPE */}
          <div className="flex items-center">
            <p className="text-[20px] pr-2">Type:</p>
            {editId === card.id ? (
              <select
                name="type"
                className="border px-2 py-1 rounded"
                value={editData.type}
                onChange={handleChange}
              >
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
            ) : (
              <h2 className="text-[20px]">{card.type}</h2>
            )}
          </div>

          {/* DATE */}
          <div className="flex items-center">
            <p className="text-[20px] pr-2">Date:</p>
            {editId === card.id ? (
              <input
                name="date"
                type="text"
                className="border px-2 py-1 rounded w-full"
                value={editData.date}
                onChange={handleChange}
              />
            ) : (
              <h2 className="text-[20px]">{card.date}</h2>
            )}
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex gap-4 justify-center mt-2">
            {editId === card.id ? (
              <>
                <button
                  className="bg-green-500 text-white px-4 py-1 rounded-full"
                  onClick={handleSave}
                >
                  Save
                </button>
                <button
                  className="bg-gray-500 text-white px-4 py-1 rounded-full"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <button
                  className="hover:bg-purple-700 px-4 py-1 border rounded-full"
                  onClick={() => handleEdit(card)}
                >
                  Edit
                </button>
                <button
                  className="hover:bg-red-700 px-4 py-1 border rounded-full"
                  onClick={() => handleDelete(card.id)}
                >
                  Delete
                </button>
              </>
            )}
          </div>
        </div>
      )))}
    </div>
  );
};
