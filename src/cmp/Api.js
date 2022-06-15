import React from "react";
import {Button, NavLink, Table} from "react-bootstrap";
import {Link} from 'react-router-dom';

class Api extends React.Component

{
    constructor()
    {
        super();
      this.state={
          posts:null
      }
        
    }
    componentDidMount()
    {
        fetch ('http://localhost:3000/posts').then((resp)=>{
            resp.json().then((result)=>{
                this.setState({posts:result})
            })
        })
    }
    deleteuser(id)
    {
        fetch (`http://localhost:3000/posts/${id}`,
        {
            method:'DELETE'
        }).then((result)=>
        {
            result.json().then((resp)=>
            {
                console.warn(resp)
                this.componentDidMount()
            })
        })
    }
    render(props)
    {
        return(
            <div >
               <h1 style={{color: this.props.mode==='dark'?'white':'black'}}>Resto Data</h1>
            {
                this.state.posts ?
                <div>
                    <Table className="striped bordered hover" style={{background: this.props.mode==='dark'?'grey':'white', color: this.props.mode==='dark'?'white':'black'}}>
                    <thead>
                      <tr>
                        <th>id</th>
                        <th>User</th>
                        <th>Password</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>zip</th>
                        <th>Operation</th>
                      </tr>
                      </thead>
                      <tbody>
                       {
                        
                    this.state.posts.map((item,i)=>
                        <tr key={i}>
                            <td>{item.id}</td>
                            <td>{item.user}</td>
                            <td>{item.password}</td>
                            <td>{item.address}</td>
                            <td>{item.city}</td>
                            <td>{item.state}</td>
                            <td>{item.zip}</td>
                            <td><NavLink><Link to={'/Update/'+item.id}>Edit</Link></NavLink>
                            </td>
                            <td><Button onClick={() => this.deleteuser(item.id)}>Delete</Button></td>
                        </tr>
                        
                    )}
                    </tbody>
                    </Table>
                </div>
                 
                :
               null
            }
            </div>
        )

    }
}
export default Api;