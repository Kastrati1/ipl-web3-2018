import React from "react";
import { Form, Jumbotron, Button, ButtonToolbar} from 'react-bootstrap';

const StripeComponent = ({
    amount,
    cardNumber,
    ccv,
    expiration, 
    onFieldChange
}) => {
    return (
        <div>
    <Jumbotron>
        <h2>Donate Money</h2>
        <Form >
            <Form.Group>
                <Form.Label column sm={2}>
                Amout
                </Form.Label>
                <Form.Control name="amount" type="number" value={amount} onChange={onFieldChange} placeholder="Amount"/>
                <Form.Control name="cardNumber" type="text" value={cardNumber} onChange={onFieldChange} placeholder="Credit card number"/>
                <Form.Control name="ccv" type="number" value={ccv} onChange={onFieldChange} placeholder="CCV"/>
                <Form.Control name="expiration" type="text" value={expiration} onChange={onFieldChange} placeholder="Expiration date"/>
             </Form.Group>
            <ButtonToolbar>
          <Button variant="outline-primary" onClick={() => donate(amount)}>
           Donate
          </Button>
        </ButtonToolbar>
            </Form>
        
    </Jumbotron>
    
</div>



    )
}

export default StripeComponent;
