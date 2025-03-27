import DatePicker from 'react-datepicker';
import classes from './NewExpense.module.css';
import { useState } from 'react';
import { Expense } from '../../types/interfaces';
import { format } from 'date-fns';



const NewExpense : React.FC = () => {
    const [formData, setFormData] =  useState<Omit<Expense, 'id'>>({
        title: '',
        amount: 0 ,
        date: ''
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, ) => {  
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name] : value
        }))
     
    }

    const handleDataChange = (date: Date | null) => {
        setFormData((prevData) => ({
            ...prevData,
            date : date ? format(date, 'yyyy-MM-dd') : ''
        }))
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
        
    }

    
    return(
        <form className={classes.newExpenseContainer} onSubmit={handleSubmit}>
            <label htmlFor='title'>Title</label>
            <input 
                id='title'
                type="text" 
                name='title'
                value={formData.title}
                onChange={handleChange}

            />

            <label htmlFor='amount'>Amount</label>
            <input
                id='amount' 
                type='number' 
                name='amount'
                value={formData.amount}
                onChange={handleChange}
            />

            <label htmlFor='date-picker'>Date</label>
            <DatePicker 
                id='date-picker'
                selected={formData.date ? new Date(formData.date) : null}
                onChange={handleDataChange}
                dateFormat='yyyy-MM-dd'
                placeholderText='Select a date'
            />

            <button type="submit">Add Expense</button>
        </form>
    )
}

export default NewExpense;