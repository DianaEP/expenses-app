import { Expense } from '../../types/interfaces';
import ExpenseItem from '../expenseItem/ExpenseItem';
import classes from './Expenses.module.css';

interface ExpensesProps{
    expenses: Expense[]
}

const Expenses: React.FC<ExpensesProps> = ({expenses}) => {
    return(
        <ul className={classes.expensesContainer}>
            {expenses.map((expense) => (
                <ExpenseItem item={expense} key={expense.id}/>

            ))}
        </ul>
    )
}

export default Expenses;