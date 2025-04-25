import classes from './Button.module.css';
import { ReactNode } from 'react';

interface ButtonProps{
    children: ReactNode;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    hasIcon?: boolean;
    iconOnly?: boolean;
    icon?: React.ComponentType<{ size?: number; color?: string }>;
    size?: number;
    color?: string;


}

const Button: React.FC<ButtonProps> = ({children, onClick, type, hasIcon, iconOnly, icon: Icon, size = 24, color = 'black'}) => {
    return(
        <button 
            onClick={onClick}
            className= {hasIcon ? classes.hasIconButton : iconOnly ? classes.iconOnlyButton : classes.button}
            type={type}
        >
            {hasIcon && Icon &&(<Icon size= {size} color={color}/>)}
            {children}
        </button>
    )
}

export default Button;