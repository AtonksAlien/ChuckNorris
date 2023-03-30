import React from 'react';
import './Button.css';



const Button = ({children, variant}) => {
   return <button className={variant == "clipboard" ? 'clipboard' : 'generator'}>{children}</button>
}

export default Button;