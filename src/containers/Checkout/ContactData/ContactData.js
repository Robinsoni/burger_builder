import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css'
class ContactData extends Component {
    state = {
            name: '',
            email: '',
            address: {
                    streat: '',
                    postcode:'',

            }
        }

        render() {
            return (
                <div className = {classes.ContactData}>
                    <h4>
                        Enter you constact data
                    </h4>
                    <input className = {classes.Input} type ="text"     name="name" placeholder = "Your name" />
                    <input className = {classes.Input} type ="text"     name="email" placeholder = "Your name" />
                    <input className = {classes.Input} type ="text"     name="streat" placeholder = "Your name" />
                    <input className = {classes.Input} type ="text"     name="postalcode" placeholder = "Your name" />
                    <Button btnType = "Success">ORDER</Button>
                </div>
            )
        }
    

    
}
export default ContactData;