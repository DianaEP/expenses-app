import { useContext, useState } from 'react';
import ExpensesContext from '../../store/expensesContext';
import ExpenseItem from '../expenseItem/ExpenseItem';
import classes from './Expenses.module.css';
import ExpensesFilter from '../expensesFilter/ExpensesFilter';



const Expenses: React.FC = () => {
    const { expenses } = useContext(ExpensesContext);
    const [selectedMonth, setSelectedMonth] = useState('All');

    const handleChangeFilter = (year: string) => {
        setSelectedMonth(year);
    }

    const filterExpenses = selectedMonth === 'All' ? expenses : expenses.filter((expense) => {
        const expenseMonth = new Date(expense.date); // Convert stored ISO string to a real JavaScript Date object
        return (expenseMonth.getMonth() + 1).toString() === selectedMonth; // `getMonth()` returns 0–11 (Jan = 0, Feb = 1, etc.) So I add 1 to match our dropdown values (1–12) and convert to string to match the dropdown values
    })
    return(
        <div>
            <ExpensesFilter selected={selectedMonth} onChangeFilter={handleChangeFilter}/>
            <ul className={classes.expensesContainer}>
                {filterExpenses.map((expense) => (
                    <ExpenseItem item={expense} key={expense.id}/>

                ))}
            </ul>
        </div>
    )
}

export default Expenses;

// function Expenses({expenses}){
//     const [selectedYear, setSelectedYear] = useState('2025');

//     const handleChangeFilter = (year) => {
//         setSelectedYear(year);
//     }
//     return(
//         <div>
//             <ExpensesFilter selected={selectedYear} onChangeFilter={handleChangeFilter}/>
//             <ul className='expenses'>
//                 {expenses.map((expense) => (
//                     <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={expense.id}/>

//                 ))}
//             </ul>
//         </div>
//     )
// }

// export default Expenses;