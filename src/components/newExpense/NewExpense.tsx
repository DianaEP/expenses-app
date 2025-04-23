import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../index.css'
import classes from './NewExpense.module.css';
import { useContext, useRef, useState } from 'react';
import { Expense } from '../../types/interfaces';

import { v4 as uuidv4 } from 'uuid';
import ExpensesContext from '../../store/expensesContext';
import useFormValidation from '../../util/formValidation/validationHook';
import Button from '../UI/button/Button';



const NewExpense : React.FC = () => {
    const { addExpense } = useContext(ExpensesContext);
    const initialData = {
        id: uuidv4(),
        title: '',
        amount: '' ,
        date: '',
        imageUrl: ''
    }
    const [formData, setFormData] =  useState<Expense>(initialData);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [temporaryImageUrl, setTemporaryImageUrl] = useState<string>('')
    const {errors, clearErrors, validateOnSubmit} = useFormValidation(formData);
    const fileInputRef = useRef<HTMLInputElement>(null);


    const handleFileClick = () => {
        fileInputRef.current?.click()
    }

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

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]; //The event.target.files is a FileList — a special object similar to an array that holds all the files the user selected.Grab the first (and usually only) file [0]
        if(file){
            setImageFile(file);
            const imageUrl = URL.createObjectURL(file)
            setTemporaryImageUrl(imageUrl);
            console.log("Temporary Image URL Set:", imageUrl);
            setFormData((prevData) => ({
                ...prevData,
                imageUrl: imageUrl, // Add the imageUrl field temporarily
            }));
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Form Data Before Submit:", formData);
        console.log("Temporary Image URL:", temporaryImageUrl);

        

        // const validatedData = {
        //     ...formData,
        //     imageUrl : temporaryImageUrl
        // }

        console.log("Validating and Adding Expense:", formData);
        if(validateOnSubmit()){
            addExpense(formData)
            setFormData(initialData);
            setTemporaryImageUrl(''); 
            setImageFile(null); 

        }

        
    }

    
    return(
        <form className={classes.newExpenseContainer} onSubmit={handleSubmit}>
            <div className={classes.wrapper}>
                <div className={classes.inputContainer}>
                    <label htmlFor='title'>Title</label>
                    <input 
                        id='title'
                        type="text" 
                        name='title'
                        value={formData.title}
                        onChange={handleChange}
                        className={classes.input}
                    />
                </div>
                {errors.title && <p className={classes.error}>{errors.title}</p>}
            </div>

            <div className={classes.wrapper}>
                <div className={classes.inputContainer}>
                    <label htmlFor='amount'>Amount</label>
                    <input
                        id='amount' 
                        type='text' 
                        name='amount'
                        value={formData.amount}
                        onChange={handleChange}
                        className={classes.input}
                    />
                </div>
                {errors.amount && <p className={classes.error}>{errors.amount}</p>}
            </div>


            <div className={classes.wrapper}>
                <div className={classes.inputContainer}>
                    <label htmlFor='date-picker'>Date</label>
                    <DatePicker 
                        id='date-picker'
                        selected={formData.date ? new Date(formData.date) : null}  //  Converting the stored ISO string back into a Date object so that the DatePicker can recognize it
                        onChange={handleDataChange}
                        dateFormat='yyyy-MM-dd'
                        placeholderText='Select a date'
                        className={classes.datePicker}
                        calendarClassName={classes.customCalendar}
                    />
                </div>
                {errors.date && <p className={classes.error}>{errors.date}</p>}
            </div>

            <div className={classes.wrapper}>
                <div className={`${classes.inputContainer} ${classes.fileInputContainer}`}> 
                    <label htmlFor='image'>Trip Image</label>
                    <input 
                        ref={fileInputRef}
                        type='file'
                        id='image'
                        accept='image/*' //It tells the file input to only allow image file types (like .jpg, .png, .webp, etc.).
                        onChange={handleImageChange}
                        style={{display: 'none'}}
                    />
                    <div className={classes.fileInputButton}>
                        <Button 
                            textOnly 
                            onClick={handleFileClick}
                            type='button'
                        >Upload Image</Button>
                        {imageFile && ( <p>Selected File: {imageFile.name}</p>)}
                    </div>
                </div>
                {errors.imageUrl && <p className={classes.error}>{errors.imageUrl}</p>}
            </div>

            <Button type='submit'>Add Expense</Button>
        </form>
    )
}

export default NewExpense;