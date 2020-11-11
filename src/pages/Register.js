import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';


const Register = () => {
  
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Gender, setGender] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted..");

        const url = "https://5fa4bcd2732de900162e85ef.mockapi.io/api/register";
        const bodyData = {
            FirstName : FirstName,
            LastName : LastName,
            Gender: Gender,
            Email: Email,
            Password: Password
        }

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bodyData)
        })
        .then((res) => res.json())
        .then((res) => console.log(res));
    }


    return (
        <div className="container">
            <h2><i>Register here!</i></h2><br />
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="firstName">First Name:</Label>
                    <Input type="text" name="FirstName" id="fisrtName" placeholder="Fill your first name" onChange={(e) => setFirstName(e.target.value)} />
                </FormGroup>

                <FormGroup>
                    <Label for="lastName">Last Name:</Label>
                    <Input type="text" name="LastName" id="lastName" placeholder="Fill your last name" onChange={(e) => setLastName(e.target.value)} />
                </FormGroup>

                <FormGroup tag="fieldset" row onChange={(e) => setGender(e.target.value)}>
                    <legend className="col-form-label col-sm-2">Gender:</legend>
                    <Col sm={10}>
                    <FormGroup check>
                        <Label check>
                        <Input type="radio" name="drone" id="gender1" value="Male" />
                        Male
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                        <Input type="radio" name="drone" id="gender2" value="Female" />
                        Female
                        </Label>
                    </FormGroup>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Label for="email">Email:</Label>
                    <Input type="text" id="email" placeholder="Fill your email" onChange={(e) => setEmail(e.target.value)} />
                </FormGroup>

                <FormGroup>
                    <Label for="password">Password:</Label>
                    <Input type="text" id="pasword" placeholder="Fill your password" onChange={(e) => setPassword(e.target.value)} />
                </FormGroup>

                <Button type="submit" color="dark">Submit</Button>
            </Form>
        </div>
    )
}


export default Register;
