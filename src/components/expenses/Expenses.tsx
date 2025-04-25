import { useContext, useState } from 'react';
import ExpensesContext from '../../store/expensesContext';
import ExpenseItem from '../expenseItem/ExpenseItem';
import classes from './Expenses.module.css';
import ExpensesFilter from '../expensesFilter/ExpensesFilter';
import Button from '../UI/button/Button';
import { ChevronLeft, ChevronRight } from 'lucide-react';



const Expenses: React.FC = () => {
    const { expenses } = useContext(ExpensesContext);
    const [selectedMonth, setSelectedMonth] = useState('All');
    const [ expenseIndex, setExpenseIndex] = useState(0);

    const handleChangeFilter = (year: string) => {
        setSelectedMonth(year);
    }

    const filterExpenses = selectedMonth === 'All' ? expenses : expenses.filter((expense) => {
        const expenseMonth = new Date(expense.date); // Convert stored ISO string to a real JavaScript Date object
        return (expenseMonth.getMonth() + 1).toString() === selectedMonth; // `getMonth()` returns 0–11 (Jan = 0, Feb = 1, etc.) So I add 1 to match our dropdown values (1–12) and convert to string to match the dropdown values
    })

    const handlePrev = () => {
        setExpenseIndex((prevIndex) => {
            const newIndex = (prevIndex - 1 + filterExpenses.length) % filterExpenses.length;
            return newIndex;
         })
    }

    const handleNext = () => {
        setExpenseIndex((prevIndex) => {
            const newIndex = (prevIndex + 1) % filterExpenses.length;
            return newIndex;
         })
    }
    return(
        <div>
            <ExpensesFilter selected={selectedMonth} onChangeFilter={handleChangeFilter}/>
            {filterExpenses.length > 0 && (
                <div className={classes.carouselContainer}>
                    <Button iconOnly onClick={handlePrev}><ChevronLeft /></Button>
                    {/* <p>Current Index: {expenseIndex}</p> */}
                    <div className={classes.carouselFrame}>
                        <ul className={classes.expensesContainer}>
                            {filterExpenses.map((expense, index) => {
                                const position = (index - expenseIndex + filterExpenses.length) % filterExpenses.length;
                                const xOffset = position < filterExpenses.length / 2 ? position : position - filterExpenses.length;
                                return (
                                
                                        <ExpenseItem 
                                            key={expense.id}
                                            item={expense} 
                                            index={index}
                                            currentIndex={expenseIndex}
                                            xOffset={xOffset}
                                            onClick={()=>setExpenseIndex(index)}
                                        />
                                )}
                            )}
                        </ul>
                    </div>
                    <Button iconOnly onClick={handleNext}><ChevronRight/></Button>
                </div>
            )}
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