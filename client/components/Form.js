import React from 'react';


export default class Form extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        address: ""

    };
}

return () => {
    render (
        <form>
            <input placeholder="First name" 
            value={this.state.firstName} 
            onChange={e => this.setState({ firstName: e.target.value})}
            />
        </form>
    ) 
  }

