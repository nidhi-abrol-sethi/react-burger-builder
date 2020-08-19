import React, { Component } from "react";

import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import classes from "./ContactData.css";
import axios from "../../../axios-orders";
import Input from "../../../components/UI/Input/Input";

class ContactData extends Component {
  state = {
    orderForm :{
                  
        name: {
          elementType: 'input',
          elementConfig:{
              type:'text',
              placeholder:'Your Name'
          },
          value:''
        },
        
          street: {
            elementType: 'input',
            elementConfig:{
                type:'text',
                placeholder:'Street'
            },
            value:''
          },
          zipcode: {
            elementType: 'input',
            elementConfig:{
                type:'text',
                placeholder:'Zip Code'
            },
            value:''
          },
          country: {
            elementType: 'input',
            elementConfig:{
                type:'text',
                placeholder:'Country'
            },
            value:''
          },
      
        email: {
          elementType: 'input',
          elementConfig:{
              type:'email',
              placeholder:' Your E-Mail'
          },
          value:''
        },,
      
      deliveryMethod: {
        elementType: 'select',
        elementConfig:{
            options:[
              {value:'fastest' , displayValue:'Fastest'}
              {value: 'cheapest', displayValue:'Cheapest'}
            ]
        },
        value:''
      },
    },
    
    loading: false
  };
  orderHandler = event => {
    event.preventDefault();
    //console.log(this.props.ingredients);
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price
    };

    axios
      .post("/orders.json", order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })

      .catch(error => {
        this.setState({ loading: false });
      });
  };
  render() {
    let form = (
      <form>
        <Input
          inputType="input"
          type="text"
          name="name"
          placeholder="Your Name"
        />
        <Input
          inputType="input"
          type="email"
          name="email"
          placeholder="Your Email"
        />
        <Input
          inputType="input"
          type="text"
          name="street"
          placeholder="Street"
        />
        <Input
          inputType="input"
          type="text"
          name="postal"
          placeholder="Postal Code"
        />
        <Button inputType="input" btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Detail</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
