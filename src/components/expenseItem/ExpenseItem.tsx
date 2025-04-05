import { Expense } from '../../types/interfaces';
import classes from './ExpenseItem.module.css';

interface ExpenseItemProps {
    item: Expense;
}

const ExpenseItem: React.FC<ExpenseItemProps> = ({item}) => {
    return(
        <li className={classes.expenseItemContainer}>
            
            <div className={classes.details}>
                <div className={classes.date}>{item.date}</div>  
                <div className={classes.title}>{item.title}</div>
            </div>
            <div> 
                <div className={classes.amount}>${item.amount}</div>
            </div>
        </li>
    )
}

export default ExpenseItem;