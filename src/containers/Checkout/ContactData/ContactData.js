import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import classes from "./ContactData.module.css";
import axios from "../../../axios-orders";
import Input from '../../../components/UI/Input/Input'

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Sexy Boy",
        address: {
          street: "Alice Street",
          zipCode: "3168",
          country: "AU",
        },
        email: "Sexy_Boy@ComeOn.com",
      },
      deliveryMethod: "fastest",
    };
    console.log(order);
    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push("/orders");
      })
      .catch((error) => {
        this.setState({ loading: false });
      });

  };

  //Note --- What Form data we need ?
  render() {
    let form = this.state.loading ? (
      <Spinner />
    ) : (
      <form>
        <Input
          className={classes.Input}
          type="text"
          name="name"
          placeholder="Your Name"
        />
        <Input
          className={classes.Input}
          type="email"
          name="email"
          placeholder="Your Mail"
        />
        <Input
          className={classes.Input}
          type="text"
          name="street"
          placeholder="Street"
        />
        <Input
          className={classes.Input}
          type="text"
          name="postal"
          placeholder="Postal Code"
        />
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );

    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
