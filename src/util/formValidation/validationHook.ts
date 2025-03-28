import { useState } from "react";
import { Expense } from "../../types/interfaces";
import validationForm, { Errors } from "./formValidation";

const useFormValidation = (data: Expense) => {
    const [errors, setErrors] = useState<Errors>({});

    function validateOnSubmit(): boolean{
        const validateErrors = validationForm(data);
        if (Object.keys(validateErrors).length > 0) {
            setErrors(validateErrors);
            return false;
        }
        return true;
    }

    function clearErrors() {
        setErrors({});
    }
    
    return {errors, setErrors, clearErrors, validateOnSubmit}
}

export default useFormValidation;