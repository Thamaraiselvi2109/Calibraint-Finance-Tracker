interface Props {
  setType: React.Dispatch<React.SetStateAction<string>>;
  setDate: React.Dispatch<React.SetStateAction<string>>;
}
export const Filter = ({ setType, setDate }: Props) => {
  const handleChange = (val: React.ChangeEvent<HTMLSelectElement>) => {
    setType(val.target.value);
  };
  const handleSetDate = (val: React.ChangeEvent<HTMLSelectElement>) => {
    setDate(val.target.value);
  };
  return (
    <>
      <div className="pr-2">
        <select
          className="border-[1px] rounded-full px-4 py-1 bg-black "
          onChange={(e) => handleChange(e)}
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>
      <div className="pl-2">
        <select
          className="border-[1px] rounded-full px-4 py-1 bg-black"
          onChange={(e) => handleSetDate(e)}
        >
          <option value="all">All</option>
          <option value="newest">Newest</option>
          <option value="oldest">Old</option>
        </select>
      </div>
    </>
  );
};
