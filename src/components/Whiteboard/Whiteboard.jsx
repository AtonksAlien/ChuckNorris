import React from 'react';
import './Whiteboard.css';

const Whiteboard = ({joke}) => {
   return <div className='whiteboard'>
        <div className="joke">
            {joke}
        </div>
   </div>
}

export default Whiteboard;