import { StylesConfig } from 'react-select';
import Select from 'react-select';

import classes from './ExpensesFilter.module.css';

interface ExpenseFilterProps {
  selected: string;
  onChangeFilter: (selectedMonth: string) => void;
}

type OptionType = {
  value: string;
  label: string;

}

const options = [
  {value: 'All', label:'All'},
  {value: '1', label:'January'},
  {value: '2', label:'February'},
  {value: '3', label:'March'},
  {value: '4', label:'April'},
  {value: '5', label:'May'},
  {value: '6', label:'June'},
  {value: '7', label:'July'},
  {value: '8', label:'August'},
  {value: '9', label:'September'},
  {value: '10', label:'October'},
  {value: '11', label:'November'},
  {value: '12', label:'December'},
]

const selectCustomStyle: StylesConfig<OptionType, false> = {
  control: (provided) => ({
    ...provided,
    backgroundColor: '#1a1a1a',
    border: '1px solid #578e7e',
    boxShadow: 'none',
    color: '#a0a0a0',
    width: '200px',
    outline: 'none',
    '&:hover': {
      border: '1px solid #578e7e',
    },
    '&:focus': {
        border: '1px solid #d4af37',
        outline: 'none',
        boxShadow: 'none', 
    },
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: '5px', 
    backgroundColor: '#1a1a1a',
    padding: '5px',
    // boxShadow: '0px 0px 5px #595959'
  }),
  menuList: (base) => ({
    ...base,
    maxHeight: '200px', 
    overflowY: 'auto',
    '::-webkit-scrollbar' :{
        width: '3px',
    },
    '::-webkit-scrollbar-thumb' :{
        background: '#3d3d3d',
        borderRadius: '10px',
    },
    '::-webkit-scrollbar-thumb:hover ':{
        background: '#a0a0a0'
    }
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#a0a0a0',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: '#3d3d3d',
    '&:hover': {
        color: '#a0a0a0',
    },
    cursor: 'pointer',
    
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#578e7e' : 'transparent',
    color: state.isSelected ? '#e0e0e0' : '#a0a0a0',
    '&:hover': {
        backgroundColor: 'transparent',
        border: '1px solid #578e7e'
    },
    cursor: 'pointer',
    borderRadius: '5px',
    width: '95%'
    
  }),
}

const ExpensesFilter:React.FC<ExpenseFilterProps> = ({selected, onChangeFilter}) => {


  const handleDropDownChange = (selectedOptions: OptionType | null,) => {
    onChangeFilter(selectedOptions?.value ?? '')
  }
  return (
    <div className={classes.expensesFilter}>
      <div className={classes.expensesFilter__control}>
        <label>Filter by month</label>
        <Select 
          options={options}
          value={options.find((option) => option.value === selected)}
          onChange={handleDropDownChange}
          isSearchable={false}
          styles={selectCustomStyle}
        />
      </div>
    </div>
  );
};

export default ExpensesFilter;

{/* <select value={selected} onChange={handleDropDownChange}>
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
        </select> */}

        // const handleDropDownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   onChangeFilter(event.target.value)
  // }