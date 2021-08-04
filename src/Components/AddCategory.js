import React, {useState} from 'react'
import PropTypes from 'prop-types'

const AddCategory=({ setcategories })=> {
    
    const [inputValue, setinputValue] = useState('');
    const handleInputText=(e)=>{
        setinputValue(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        //console.log(setcategories);
        if (inputValue.trim().length > 2){
        setcategories(cat=>[ inputValue,...cat]);// al poner el inputvalue primero lo que hacemos es que muestre primero la ultima busqueda
        setinputValue('');
        }
    }

  return (
        <form onSubmit={handleSubmit}>
        <input 
            type="text"
            value={inputValue}
            onChange={handleInputText}
            placeholder="Ingrese un Texto"
            /> 
        
        </form>
    )
}
AddCategory.propType={
    setcategories: PropTypes.func.isRequired
}

export default AddCategory;

