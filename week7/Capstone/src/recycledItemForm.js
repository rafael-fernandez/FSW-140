import {useState} from 'react'


function recycledItemForm({ add, name, desc, quantity, id }) {

const initialInputs = {name: '', description: ''};
const [inputs, setInputs]= useState(initialInputs)

const handleChange = (e) => {
    const {name, value} = e.target;
    setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
}

const handleSubmit = (e) => {
    e.preventDefault();
    add(inputs, id);
    setInputs(initialInputs);



    setInputs(initialInputs);
}

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                name='name'  
                value= {inputs.name} 
                onChange = {handleChange}   
                placeholder='Name' />

             <input
                type='text'
                name='desc'  
                value= {inputs.desc} 
                onChange = {handleChange}   
                placeholder='Description' />  
                <button>Add Item</button>

        </form>

    );
}

export default recycledItemForm;