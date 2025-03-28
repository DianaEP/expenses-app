import { createContext, ReactNode, useState } from "react";
import { Expense } from "../types/interfaces";

interface ExpenseContextTypes{
    expenses: Expense[];
    addExpense: (expense: Expense) => void;
    removeExpense: (id:string) => void;
}

interface ExpensesContextProviderProps {
    children: ReactNode; //ReactNode that represents anything that can be rendered inside a React component.
}

const ExpensesContext = createContext<ExpenseContextTypes>({
    expenses: [],
    addExpense: () => {},
    removeExpense: () => {}
});

export default ExpensesContext;


export const ExpensesContextProvider : React.FC<ExpensesContextProviderProps> = ({children}) => {
    const [expenses, setExpenses] = useState<Expense[]>([]);

    const addExpense = (expense: Expense) => {
        setExpenses((prevExpense) => [...prevExpense, expense])
    }

    const removeExpense = (id: string) => {
        setExpenses((prevExpense) => prevExpense.filter((item) => item.id !== id))
    }

    const contextValues: ExpenseContextTypes  = {
        expenses,
        addExpense,
        removeExpense
    }
    return(
        <ExpensesContext.Provider value={contextValues}>{children}</ExpensesContext.Provider>
    )
}

