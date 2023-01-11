

import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';
import { useState } from 'react';



const ContactForm = ({onSubmit}) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    
const handleChangeForm = (event) => {
    const { name, value } = event.target;
    if (name === 'name') {
        setName(value);
    } else if (name === 'number') {
        setNumber(value);
    };
};



const handleFormSubmit = event => {
    event.preventDefault();
    const data = { name, number };
    onSubmit(data);
    setName('');
    setNumber('');
};

return (
    <div className = {styles.phonebook}>
        <h2> Phonebook </h2>
        <form onSubmit = {handleFormSubmit}>
            <label htmlFor = "name" >Name</label>
            <input
                type = "text"
                name = "name"               
                placeholder = 'Enter name'
                value = {name}
                onChange = {handleChangeForm}
                pattern = "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title = "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
            <br />
            <label htmlFor="number">Number</label>
            <input
                type="tel"
                name = "number"
                placeholder = 'Enter phone number'
                value = {number}
                onChange = {handleChangeForm}
                pattern = "\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title = "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
            <button type = 'submit'>
                Add contact
            </button>
            <br />
        </form>
    </div>
    );
};


ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};


export default ContactForm;