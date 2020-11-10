import React, { useState } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';


const Review = () => {

    const [rate, setRate] = useState("");
    const [review, setReview] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted..")

        const url = "https://5fa4bcd2732de900162e85ef.mockapi.io/api/reviews";
        const bodyData = {
            rate: rate,
            review: review
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
            <h2><i>Let's Begin!</i></h2><br />
            <Form onSubmit={handleSubmit}>
            <h4>Give us a rate!</h4>
            <ButtonGroup>
                <Button color="light" onClick={() => setRate(1)} active={rate === 1}>One</Button>
                <Button color="light" onClick={() => setRate(2)} active={rate === 2}>Two</Button>
                <Button color="light" onClick={() => setRate(3)} active={rate === 3}>Three</Button>
                <Button color="light" onClick={() => setRate(4)} active={rate === 4}>Four</Button>
                <Button color="light" onClick={() => setRate(5)} active={rate === 5}>Five</Button>
            </ButtonGroup>
            <hr />
            <FormGroup>
                <Label for="review"><h4>What is your thought?</h4></Label>
                <Input type="textarea" name="text" id="review" onChange={(e) => setReview(e.target.value)}/>
            </FormGroup>
            <br />
            <Button type="submit" color="dark">Submit</Button>
            </Form>
        </div>
    )
}


export default Review;