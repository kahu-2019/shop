import React from 'react'

class Header extends React.Component {
  constructor(props){
    super(props)
  }
  
  render() {
    return (
        <div>
            <h1 className='title  text-center'>Shop</h1>
            <h5 className='title  text-center'>Buy some stuff</h5>
            <hr />
        </div>
    )
  }
}


export default Header

