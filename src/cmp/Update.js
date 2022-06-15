import React from "react";
import {Form, Row, Col,Button} from 'react-bootstrap'
import { Outlet } from "react-router-dom";

class Update extends React.Component{
  constructor()
  {
    super();
    this.state={
      posts:null
    }
  }
  componentDidMount()
  {
    let url = 'http://localhost:3000/posts/'
    fetch(url).then((resp)=>{
      resp.json().then((result)=>{
          this.setState({posts:result})
      })
  })
  }
  
  getuser()
  {
    this.componentDidMount()
  }
  render() {
    let a = window.location.href.split('/',5);
    let id = a[4];
    console.warn('id:',id);
    
    return (
      <div>
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
      <Form.Control onChange={(event)=>{this.setState({password:event.target.value})}} type="password" value={this.password} placeholder="Password" />
    </Form.Group>
  </Row>
    
  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control onChange={(event)=>{this.setState({address:event.target.value})}} value={this.address} placeholder="1234 Main St" />
  </Form.Group>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control onChange={(event)=>{this.setState({city:event.target.value})}} value={this.city} placeholder="Norway,washington etc" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select onChange={(event)=>{this.setState({state:event.target.value})}} value={this.state} defaultValue="Choose...">
        <option>Choose...</option>
        <option>KPK</option>
        <option>Sindh</option>
        <option>Punjab</option>
        <option>Balochistan</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control onChange={(event)=>{this.setState({zip:event.target.value})}} value={this.zip} placeholder="23****,234** etc" />
    </Form.Group>
  </Row>
   <Row className="mb-3">
    <Form.Group as={Col}>
  <Button onClick={()=>this.Update()}  variant="primary" type="submit">
    Update
  </Button></Form.Group>
  <Form.Group as={Col}>
  <Button onClick={()=>this.getuser()}  variant="primary" type="update">
    Data
  </Button></Form.Group>
  </Row> 
</Form>
</div>

      </div>
      
    )
  }
}
<Outlet></Outlet>
export default Update;