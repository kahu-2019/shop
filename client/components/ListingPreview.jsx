import React from 'react'
import {Link} from 'react-router-dom'

class ListingPreview extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            id:    this.props.id,
            title: this.props.title,
            image: this.props.image,
            price: `$${this.props.price}`
        }
    }

    render(){
        return (<React.Fragment>
                <div className='row'>
                    <div className='col'>
                        <img className='img-thumbnail' style={{height:'15vw'}} src={this.state.image} alt="Clock Image" />
                    </div>
                    <div className='col-9'>
                        <h3><Link to={`/listing/${this.state.id}`}>{this.state.title}</Link></h3>
                        <h4>{this.state.price}</h4>
                    </div>
            </div>
            <hr />
            </React.Fragment>
        )
    }
}

export default ListingPreview