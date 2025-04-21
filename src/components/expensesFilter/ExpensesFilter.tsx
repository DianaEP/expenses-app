

import classes from './ExpensesFilter.module.css';

interface ExpenseFilterProps {
  selected: string;
  onChangeFilter: (selectedMonth: string) => void;
}

const ExpensesFilter:React.FC<ExpenseFilterProps> = ({selected, onChangeFilter}) => {

  const handleDropDownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChangeFilter(event.target.value)
  }
  return (
    <div className={classes.expensesFilter}>
      <div className={classes.expensesFilter__control}>
        <label>Filter by year</label>
        <select value={selected} onChange={handleDropDownChange}>
          <option value='All'>All</option>
          <option value='1'>January</option>
          <option value='2'>February</option>
          <option value='3'>March</option>
          <option value='4'>April</option>
          <option value='5'>May</option>
          <option value='6'>June</option>
          <option value='7'>July</option>
          <option value='8'>August</option>
          <option value='9'>September</option>
          <option value='10'>October</option>
          <option value='11'>November</option>
          <option value='12'>December</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;