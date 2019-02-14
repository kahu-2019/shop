import React from 'react';
import Component from 'react'



export default class Form extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        address: ""

    };
    
    render (){
    return (
        <form>
            <input placeholder="First name" 
            value={this.state.firstName} 
            onChange={e => this.setState({ firstName: e.target.value})}
            />
              <input placeholder="Last name" 
            value={this.state.lastName} 
            onChange={e => this.setState({ lastName: e.target.value})}
            />
              <input placeholder="email" 
            value={this.state.email} 
            onChange={e => this.setState({ email: e.target.value})}
            />
             <input placeholder="address" 
            value={this.state.address} 
            onChange={e => this.setState({ address: e.target.value})}
            />
                
            <button onClick={() => this.onSubmit()}>Submit</button>
        </form>
    ) 
  }

}