import { useContext } from 'react';
import ExpensesContext from '../../store/expensesContext';
import ExpenseItem from '../expenseItem/ExpenseItem';
import classes from './Expenses.module.css';



const Expenses: React.FC = () => {
    const { expenses } = useContext(ExpensesContext);
    return(
        <ul className={classes.expensesContainer}>
            {expenses.map((expense) => (
                <ExpenseItem item={expense} key={expense.id}/>

            ))}
        </ul>
    )
}

export default Expenses;