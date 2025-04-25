import { Expense } from '../../types/interfaces';
import classes from './ExpenseItem.module.css';
import { format } from 'date-fns';

interface ExpenseItemProps {
    item: Expense;
    index: number;
    currentIndex: number;
    xOffset: number;
    onClick: () => void;
}

const ExpenseItem: React.FC<ExpenseItemProps> = ({item, index, currentIndex, xOffset, onClick}) => {
    return(
        <li 
            className={`${classes.expenseItemContainer} ${index === currentIndex ?  classes.active : ''}`}
            style={{
                transform: `translateX(${xOffset * 100}%) scale(${index === currentIndex ? 1 : 0.80})`,
                zIndex: index === currentIndex ? 10 : 1
            }}
            onClick={onClick}
        >
            
            <div className={classes.details}>
                <div className={classes.date}>{format( new Date(item.date), 'MMMM dd, yyyy')}</div>  
                <div className={classes.title}>{item.title}</div>
            </div>
            <div> 
                <div className={classes.amount}>${item.amount}</div>
            </div>
            <div>
                <img src={item.imageUrl} alt='ImagePreview' style={{width: '100px'}}/>
            </div>
        </li>
    )
}

export default ExpenseItem;