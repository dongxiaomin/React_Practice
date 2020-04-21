// import React from 'react';
import React, { Component } from 'react';

class Home extends Component {
  render (props){
    return (
      <h1>{this.props.homeLink}</h1>
    )
  }
}
// const Home = (props) =>{
//   return (
//     // <h1 >Home</h1>
//   <h1>{props.homeLink}</h1>
    
//   )
// }

export default Home;