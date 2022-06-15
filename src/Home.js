import React from "react"
import Swal from "sweetalert2"
import Api from "./cmp/Api";
import {Form, Button, Col, Row, Nav} from 'react-bootstrap'
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
class Home extends React.Component
{
    constructor()
    {
        super()
        this.state={
          id:"",
           user:"",
           password: "",
           address: "",
           city: "",
           state: "",
           zip:"",
           userError:"",
           passwordError:""
            
        }
    }
    valid()
    {
        if(!this.state.user.includes("@") && this.state.password.includes("1-5"))
        {
            this.setState({userError:"must be type of email", passwordError:"password must be 5 letters"})
        }
        else if ( !this.state.user.includes("@"))
        {
            this.setState({userError:"must be type of email"
        })
        }
        else if(this.state.password.includes("1-5"))
        {
            this.setState({passwordError:"password must be 5 letters"})
            
        }
        else
        {
            return true
        }

    }
    submit()
    {   

        this.setState(
            {userError:"", passwordError:""}
        )
        if(this.valid())
        {
          let url='http://localhost:3000/posts';
          fetch(url,{
          method:'Post',
          header:{

            'Content-Type':'application/json'
          },
          body: JSON.Stringify(this.state)
          }).then((result)=>{
            result.json().then((resp)=>
            {
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title:  "data successfully added",
                showConfirmButton: true,
                timer: 8000
             })
            })
          })
         
          
        }
    }
    display()                              
    {
      <BrowserRouter>
        
        <Routes>
      
       <Route path="/Api" element={<Api/>}/>
       </Routes>
       </BrowserRouter> 
  // return   console.warn("hello"),
  //     [this.state.user,
  //                 this.state.address,this.state.city,
  //                this.state.state, this.state.zip] 
    }
    render()
    {
        return (
            <div >
              <h1>Form handling</h1>
        
              <div>
                
              <Form style={{ width: "50%", display: 'inline-grid'}}>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridId">
      <Form.Label>ID</Form.Label>
      <Form.Control onChange={(event)=>{this.setState({id:event.target.value})}} type="number" placeholder="Enter sno"/>
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
  <Button onClick={()=>this.submit()}  variant="primary" type="submit">
    Submit
  </Button></Form.Group>
 <Link to="/Api">
    <Form.Group as={Col}>
  <Button onClick={()=>this.display()} variant="success" type="display">Display</Button></Form.Group>
  </Link>
  </Row>
</Form></div>
              {/* <label>Enter user
              <input type="email"
               name="user"
               onChange={(event)=>{this.setState({user:event.target.value})}} 
               /></label>
              <p style={{color:"red", fontsize:"14px"}}>{this.state.userError}</p>
              <label>Enter your password
              <input type="password"
               name="password" 
               onChange={(event)=>{this.setState({password:event.target.value})}} 
              /></label>
              <p style={{color:"red", fontsize:"14px"}}>{this.state.passwordError}</p>
              <button onClick={()=>this.submit()} >Submit</button> */}
            </div>
        )
    }
}
export default Home;