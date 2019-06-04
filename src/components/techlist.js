import React, { Component } from 'react';
import { connect } from 'react-redux';

import './techlist.css'

class Techlist extends Component{
  render() {
   console.log(this.props )
const Techstack  = this.props.tech.TechData.map((e) => {
  return  <button className='a1 container-fluid text-center  card shadow btn btn-sm btn-outline-primary '>
         <img className='a2 card-img-top btn' src={e.imgURL} alt='' />

         <h6 className='text-center a3 card-title'>{e.name}</h6>

        </button>
})

    return <div className='card shadow'>
        <div className='container row col-lg-12 justify-content-center'>
            {Techstack}
           </div>
           </div>
  }

}
const mapStateToProp = (state) => {
  return { tech: state}
}
export default connect(mapStateToProp)(Techlist);
