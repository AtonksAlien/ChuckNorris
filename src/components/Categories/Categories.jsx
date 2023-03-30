import React, {useState, useEffect} from 'react';
import { Icon } from '@iconify/react';
import './Categories.css';


const Categories = ({selected, setSelected}) => {

    const [categories, setCategories] = useState([]);
    const [click, setClick] = useState(false);

    useEffect(() => {
    fetch('https://api.chucknorris.io/jokes/categories')
        .then((response) => response.json())
        .then((data) => {
            setCategories(data);
        });    
    }, [])

    const handleCategory = (category) => {
        setClick(!click)
        setSelected(category.category)
    }

   return <>
        <div className="categories">
            <div className="baseSelection" onClick={()=>setClick(!click)}>
                {selected}
                <Icon icon="material-symbols:keyboard-arrow-down-rounded" width={40}/>
            </div>
            {click && <div className="selection">
                {categories.map((category, index) => {
                    return <div className="category" key={index} onClick={()=> handleCategory({category})}>
                            {category}
                    </div>
                })}
            </div>
            }
        </div>   
   </>


}

export default Categories;