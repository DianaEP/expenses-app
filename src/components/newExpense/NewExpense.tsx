import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import classes from './NewExpense.module.css';
import { useContext, useState } from 'react';
import { Expense } from '../../types/interfaces';

import { v4 as uuidv4 } from 'uuid';
import ExpensesContext from '../../store/expensesContext';
import useFormValidation from '../../util/formValidation/validationHook';



const NewExpense : React.FC = () => {
    const { addExpense } = useContext(ExpensesContext);
    const initialData = {
        id: uuidv4(),
        title: '',
        amount: 0 ,
        date: ''
    }
    const [formData, setFormData] =  useState<Expense>(initialData);
    const {errors, clearErrors, validateOnSubmit} = useFormValidation(formData);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, ) => {  
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name] : value
        }))
        if(errors){
            clearErrors();
        }
     
    }

    const handleDataChange = (date: Date | null) => {
        setFormData((prevData) => ({
            ...prevData,
            date : date ? date.toISOString() : ''  // Store the selected date as an ISO string, e.g. "2025-07-14T00:00:00.000Z" because it's consistent, works great with `new Date()` and easy to parse
        }))
        if(errors){
            clearErrors();
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);

        const validatedData = {
            ...formData,
            amount: Number(formData.amount)
        }

        if(validateOnSubmit()){
            addExpense(validatedData)
            setFormData(initialData);

        }

        
    }

    
    return(
        <form className={classes.newExpenseContainer} onSubmit={handleSubmit}>
            <div>
                <label htmlFor='title'>Title</label>
                <input 
                    id='title'
                    type="text" 
                    name='title'
                    value={formData.title}
                    onChange={handleChange}
                />
                {errors.title && <p className="error">{errors.title}</p>}
            </div>

            <div>
                <label htmlFor='amount'>Amount</label>
                <input
                    id='amount' 
                    type='text' 
                    name='amount'
                    value={formData.amount}
                    onChange={handleChange}
                />
                {errors.amount && <p className="error">{errors.amount}</p>}
            </div>


            <div>
                <label htmlFor='date-picker'>Date</label>
                <DatePicker 
                    id='date-picker'
                    selected={formData.date ? new Date(formData.date) : null}  //  Converting the stored ISO string back into a Date object so that the DatePicker can recognize it
                    onChange={handleDataChange}
                    dateFormat='yyyy-MM-dd'
                    placeholderText='Select a date'
                    className={classes.datePicker}
                />
                {errors.date && <p className="error">{errors.date}</p>}
            </div>

            <button type="submit">Add Expense</button>
        </form>
    )
}

export default NewExpense;