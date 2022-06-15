import React from "react";
import {Form, Button, Col, Row} from 'react-bootstrap'
import Swal from "sweetalert2";
class create extends React.Component
{
    constructor()
    {
        super();
        this.state={
            id:null,
            user:null,
            password:null,
            address:null,
            city:null,
            state:null,
            zip:null
        }
    }
    // valid()
    // {
    //   if(!this.state.user.includes("@") && this.state.password.includes("1-5"))
    //   {
        
    //   }
    // }
    create()
    {
      let data = this.state
      let url='http://localhost:3000/posts';
      fetch(url,{
        method: 'Post',
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
      }).then((result)=>{
        result.json().then((resp)=>
        {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'data added',resp,
            showConfirmButton: true,
            timer: 8000})
        })
      })

    }
    render()
    {
        return (
            <div>
            <h1>
            Create New Data
            </h1>
            <div>
            <Form style={{ width: "50%", display: 'inline-grid'}}>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridId">
      <Form.Label>ID</Form.Label>
      <Form.Control onChange={(event)=>{this.setState({id:event.target.value})}} type="number" placeholder="Enter Id" />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control onChange={(event)=>{this.setState({user:event.target.value})}} type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control onChange={(event)=>{this.setState({password:event.target.value})}} type="password" placeholder="Password" />
    </Form.Group>
  </Row>
    
  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control onChange={(event)=>{this.setState({address:event.target.value})}} placeholder="1234 Main St" />
  </Form.Group>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control onChange={(event)=>{this.setState({city:event.target.value})}} placeholder="Norway,washington etc" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select onChange={(event)=>{this.setState({state:event.target.value})}} defaultValue="Choose...">
        <option>Choose...</option>
        <option>KPK</option>
        <option>Sindh</option>
        <option>Punjab</option>
        <option>Balochistan</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control onChange={(event)=>{this.setState({zip:event.target.value})}} placeholder="23****,234** etc" />
    </Form.Group>
  </Row>
   <Row className="mb-3">
    <Form.Group as={Col}>
  <Button onClick={()=>this.create()}  variant="primary" type="submit">
    Create
  </Button></Form.Group>
 {/*<Link to="/Api">
    <Form.Group as={Col}>
  <Button onClick={()=>this.display()} variant="success" type="display">Display</Button></Form.Group>
  </Link>*/}
  </Row> 
</Form></div>
            </div>
        
        )
        
    }
}
export default create;