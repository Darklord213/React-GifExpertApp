import React, { useState } from 'react';
import AddCategory  from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

const GiftExpertApp=()=>{
    
    //const categories=['Punchi ', 'Samurai ', 'Dragon Ball'];
    const [categories, setcategories] = useState(['One Punch'])
    
    /* const agregar=()=>{
        setcategories([...categories,'Camilo Adrian ']);
        
    } */ 

    return(
        <>
        <h2>GiftExpertApp</h2>
        <AddCategory setcategories={setcategories}  />
        <hr/>
        <ol> 
            {
                categories.map(category=>(
                    <GifGrid key={category} 
                    category={category} />
                    
                ))
            }
        </ol>
        </>
    )
}

export default GiftExpertApp;

 ///* {categories.map((category)=>{
             //   return <li key={category}>{category}</li> 
            //}) }   */ 