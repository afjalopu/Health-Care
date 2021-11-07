import React from "react";
import Button from "@restart/ui/esm/Button";
import { Form } from "react-bootstrap";
import image from './20489050.jpg'

const Shipping = () => {
  return (

<div className="container px-4">
  <div className="row gx-5">
    <div className="col">
      <br />      <br />
      <br />

      <h4>Get Appointment</h4>
    <Form>
            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="Your Name" />
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Your Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button className="btn btn-warning">Submit</Button>{" "}
          </Form>
          </div>
    <div className="col">
      <br />   <br />
      <br />

    <img src={image} className="w-100 h-100" alt="" />
    </div>
  </div>
  <br /> <br /> <br />
  <br /> <br />


</div>

  );
};

export default Shipping;
