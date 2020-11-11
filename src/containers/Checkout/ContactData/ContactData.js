import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css'
import axios from 'axios'
import Spinner from '../../../components/UI/Spinner/Spinner'
class ContactData extends Component {
    state = {
            name: '',
            email: '',
            address: {
                    streat: '',
                    postcode:'',

            },
            loader:false
        }
        orderDataHandler = (e) => {
            
            this.setState({loader:true})
            const order = {
                ingredients:this.props.ingredients,
                //price:this.props.price, // we should not send the price this way however 
                                            // It is fine for testing purpouse
                del_address:{
                    name:'Robin Soni',
                    addressLine1: 'Street1',
                    addressLine1: 'Street2',
                    city: 'City',
                    postcode:'012345',
                    mobileNo:'9876543210',
                },
                del_method:'Fastest'
            }
            axios.post('https://reactapp-d3bb5.firebaseio.com/orders.json',order)
                .then(response => {this.setState({loader:false}); console.log(response)
                    this.props.history.push('/')})
                .catch(err => { this.setState({loader:false});console.log(err); this.props.history.push('/')})
                
        }

        render() {
            let form =  <div className = {classes.ContactData}>
                                <h4>
                                    Enter you constact data
                                </h4>
                                <input className = {classes.Input} type ="text"     name="name" placeholder = "Your name" />
                                <input className = {classes.Input} type ="text"     name="email" placeholder = "Your name" />
                                <input className = {classes.Input} type ="text"     name="streat" placeholder = "Your name" />
                                <input className = {classes.Input} type ="text"     name="postalcode" placeholder = "Your name" />
                                <Button btnType = "Success" click = {this.orderDataHandler}>ORDER</Button>
                            </div>
            if(this.state.loader){
                form = <Spinner />
            }
            return (
                <div className = {classes.ContactData}>
                <h4>
                    Enter you constact data
                </h4>
                <input className = {classes.Input} type ="text"     name="name" placeholder = "Your name" />
                <input className = {classes.Input} type ="text"     name="email" placeholder = "Your name" />
                <input className = {classes.Input} type ="text"     name="streat" placeholder = "Your name" />
                <input className = {classes.Input} type ="text"     name="postalcode" placeholder = "Your name" />
                <Button btnType = "Success" click = {this.orderDataHandler}>ORDER</Button>
            </div>
            )
        }
    

    
}
export default ContactData;