import React from 'react';
import './Button.css';



const Button = ({children, variant, action, active}) => {
   return <button disabled = {active} onClick={action} className={variant == "clipboard" ? 'clipboard' : 'generator'}>{children}</button>
}

export default Button;