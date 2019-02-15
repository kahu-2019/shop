import React from 'react'

class ListingPreview extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            id:    this.props.id,
            title: this.props.title,
            image: this.props.image,
            price: `$${this.props.price}`,
            description: this.props.description
        }
    }

    render(){
        return (<React.Fragment>
                <div className='row'>
                    <div className='col'>
                        <img className='img-thumbnail' style={{height:'15vw'}} src={this.state.image} alt="Clock Image" />
                    </div>
                    <div className='col-9'>
                        <h3>{this.state.title}</h3>
                        <h6>{this.state.description}</h6>
                        <br />
                        <h5>{this.state.price}</h5>
                        <button className='btn btn-outline-primary float-right'>Add to cart</button>
                    </div>
            </div>
            <hr />
            </React.Fragment>
        )
    }
}

export default ListingPreview