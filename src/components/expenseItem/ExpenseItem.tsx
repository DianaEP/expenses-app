import { Expense } from '../../types/interfaces';
import classes from './ExpenseItem.module.css';
import { format } from 'date-fns';

interface ExpenseItemProps {
    item: Expense;
}

const ExpenseItem: React.FC<ExpenseItemProps> = ({item}) => {
    return(
        <li className={classes.expenseItemContainer}>
            
            <div className={classes.details}>
                <div className={classes.date}>{format( new Date(item.date), 'MMMM dd, yyyy')}</div>  
                <div className={classes.title}>{item.title}</div>
            </div>
            <div> 
                <div className={classes.amount}>${item.amount}</div>
            </div>
        </li>
    )
}

export default ExpenseItem;