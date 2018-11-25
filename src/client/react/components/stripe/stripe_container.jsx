import React from "react";
import StripeComponent from './stripe_component';
import sendApiRequest from "react/utils/api";

class StripeContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      amount: "11",
    };
    this.onFieldChange = this.onFieldChange.bind(this);
  }

  onFieldChange(event){
    this.setState({
        [event.target.name]: event.target.value,
    })
  }


  render() {
    return(
      <StripeComponent>
        amount={this.state.amount}
      </StripeComponent>
    )      
  }

  donate(amount){
    const url = `/api/stripe/`;
    sendApiRequest({ url })
      .then((message) => {
        this.setState({
          message: message,
        })
      })
      .catch((error) => {
        console.error(error);
        this.setState({
          message: [],
        })
      })
  }
}

export default StripeContainer;