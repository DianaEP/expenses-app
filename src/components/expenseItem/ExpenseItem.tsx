import { Expense } from '../../types/interfaces';
import classes from './ExpenseItem.module.css';

interface ExpenseItemProps {
    item: Expense;
}

const ExpenseItem: React.FC<ExpenseItemProps> = ({item}) => {
    return(
        <li className={classes.expenseItemContainer}>
            <div>{item.date}</div>
            <div>
                <h2>{item.title}</h2>
                <div>${item.amount}</div>
            </div>
        </li>
    )
}

export default ExpenseItem;