import { Expense } from "../../types/interfaces";

export interface Errors {
    title?: string;
    amount?: string;
    date?: string;
}

const validationForm = (data: Expense) => {
    const errors: Errors = {} ;

    if(!data.title.trim()){
        errors.title = 'Title is required'
    }
 
    if(!data.amount){
        errors.amount = 'Amount is required'
    }else if(isNaN(data.amount) || data.amount <= 0){
        errors.amount = 'Please enter a valid number'
    }

    if(!data.date){
        errors.date = 'Date is required'
    }
  

    return errors;

}

export default validationForm;