import React, {useState} from 'react';
import { Icon } from '@iconify/react';

const Categories = ({props}) => {

    const [categories, setCategories] = useState([]);
    fetch('https://api.chucknorris.io/jokes/categories')
        .then((response) => response.json())
        .then((data) => {
            setCategories(data);
        });

   return <>
   <label className='select' htmlFor="categories">
    <select name="categories" id="categories" required>
            <option value="" disabled selected>SCEGLI TEMA</option>
            {categories.map((category) => {
                return <option value={category}>{category}</option>
            })}
    </select>
    <Icon className='arrow' icon="material-symbols:keyboard-arrow-down-rounded" />
   </label>
   
   </>


}

export default Categories;