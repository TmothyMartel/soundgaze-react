import React from 'react';
import { Button, Form, FormGroup, Label, Input,  CustomInput } from 'reactstrap';

function ReservationForm(props) {
    return (
        <Form>
            <FormGroup>
                <Label htmlFor="timeOfDay">Choose A Time</Label>
                <CustomInput type="select" id="exampleCustomSelect" name="customSelect">
                    <option value="">Select</option>
                    <option>12:00pm - 1:00pm</option>
                    <option>1:00pm - 2:00pm</option>
                    <option>2:00pm - 3:00pm</option>
                    <option>3:00pm - 4:00pm</option>
                    <option>4:00pm - 5:00pm</option>
                    <option>5:00pm - 6:00pm</option>
                    <option>6:00pm - 7:00pm</option>
                    <option>7:00pm - 8:00pm</option>
                    <option>8:00pm - 9:00pm</option>
                    <option>9:00pm - 10:00pm</option>
                    <option>10:00pm - 11:00pm</option>
                    <option>11:00pm - 12:00am</option>
                </CustomInput>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="firstname">First Name</Label>
                <Input type="text" name="firstnamse" id="firstname" placeholder="bob" />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="lastname">Last Name</Label>
                <Input type="text" name="firstnamse" id="firstname" placeholder="bob" />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input type="email" name="email" id="email" placeholder="you@example.com" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleNumber">Phone Number</Label>
            <Input  type="number" name="number" id="exampleNumber"placeholder="2125554040"/>
      </FormGroup>
            {' '}
            <Button>Submit reservation</Button>
        </Form>
    )
}

export default ReservationForm;