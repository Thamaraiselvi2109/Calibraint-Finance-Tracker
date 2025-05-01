import { useSelector } from "react-redux";
import { selectAllTransaction } from "../../features/transaction/TransactionSlice";

export const RecentTransactionCards = () => {

    const TransactionsData = useSelector(selectAllTransaction);
    const RecentTransactionsData = [...TransactionsData].reverse()
    
    
  return (
    <>
    <div className="flex flex-col md:flex-row md:flex-wrap gap-y-4 justify-around" >
    {
        RecentTransactionsData.map((card)=>(
            <div className="border-[1px] rounded-[20px] w-[100%] md:w-[45%] lg:w-[30%] p-4 hover:bg-sky-400" key={card.id}>
                <div className="flex items-center"><p className="text-[20px] pr-2">Title : </p>  <h2 className="text-[20px] flex ">{card.title}</h2></div>
                <div className="flex items-center"><p className="text-[20px] pr-2">Amount : </p>  <h2 className="text-[20px]">{card.amount}</h2></div>
                <div className="flex items-center"><p className="text-[20px] pr-2">Type : </p>  <h2 className="text-[20px]">{card.type}</h2></div>
                <div className="flex items-center"><p className="text-[20px] pr-2">Date : </p>  <h2 className="text-[20px]">{card.date}</h2></div>
            </div>
        ))
    }
    </div>
    </>
  )
};
