import { Expense } from "../../types/interfaces";

export interface Errors {
    title?: string;
    amount?: string;
    date?: string;
    imageUrl?: string;
}

const validationForm = (data: Expense) => {
    const errors: Errors = {} ;

    console.log("Validating Form Data:", data);

    if(!data.title.trim()){
        errors.title = 'Title is required'
    }
 
    const amountNumber = Number(data.amount)
    if(!data.amount){
        errors.amount = 'Amount is required'
    }else if(isNaN(amountNumber) || amountNumber <= 0){
     
        errors.amount = 'Please enter a valid number'
    }

    if(!data.date){
        errors.date = 'Date is required'
    }
    console.log("Image URL being validated:", data.imageUrl);

    if(!data.imageUrl){
        errors.imageUrl = 'Image is required'
    }
  

    return errors;

}

export default validationForm;