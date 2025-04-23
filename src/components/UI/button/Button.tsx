import classes from './Button.module.css';
import { ReactNode } from 'react';

interface ButtonProps{
    children: ReactNode;
    textOnly?: boolean;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;

}

const Button: React.FC<ButtonProps> = ({children, textOnly, onClick, type}) => {
    return(
        <button 
            onClick={onClick}
            className= {textOnly ? classes.textOnlyButton : classes.button}
            type={type}
        >
            {children}
        </button>
    )
}

export default Button;