interface Props {
  id: number;
  title: string;
  total: number;
  color: string;
}

export const SummaryCard = ({ id, title, total, color }: Props) => {
  return (
    <>
      <div
        className={` ${color} border-[1px] p-2 rounded-[20px] w-[95%]  lg:w[27%]`}
        key={id}
      >
        <h2 className="text-[20px] md:text-[28px]">{title}</h2>
        <p className="text-[22px] md:text-[25px]">₹ {total}</p>
      </div>
    </>
  );
};
