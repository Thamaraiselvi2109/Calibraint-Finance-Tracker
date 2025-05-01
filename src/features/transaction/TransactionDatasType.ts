export interface TrasnactionFormTypes {
    title: string,
    amount: number | null,
    type: string,
    date: string,
}

export interface TransactionsTypes{
    id: number,
    title: string,
    amount: number,
    type: string,
    date: string,
    userId: number,
}