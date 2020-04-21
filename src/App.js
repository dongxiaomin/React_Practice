import React, { Component } from 'react';

import Home from './components/Home';
import Header from './components/Header';

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      homeLink: "Home",
      homeMounted: true
    }
  }
  onGreet(age){
    alert(age)
  }
  onChangeLinkName(newName){
    this.setState({
      homeLink: newName
    })
  }

  onChangeHomeMounted() {
    this.setState({
      homeMounted: !this.state.homeMounted
    })
  }

  
  render (){
    // let content = "";
    // if(true){
    //   content = "welcome"
    // }
    const user={
      name: "Elsa",
      hobbies: ["Sports","Reading"]
    }

    let headCmp = "";
    if (this.state.homeMounted){
      headCmp = (
        <Header 
            name={"Max"} 
            intialAge={12} 
            user={user} 
            greet={this.onGreet} 
            changeLink={this.onChangeLinkName.bind(this)}
            initialName={this.state.homeLink}>
          <p>i am child</p>
        </Header>
      )
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-xs-offset-11">
            <Home homeLink={this.state.homeLink} />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-xs-offset-11">
            <h1>Hello World!</h1>
            {/* { content } */}
            { true ? "true" : "false" }
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-xs-offset-11">
            {/* <Header name={"Max"} age={12} user={user}/> */}
            {/* <Header 
                name={"Max"} 
                intialAge={12} 
                user={user} 
                greet={this.onGreet} 
                changeLink={this.onChangeLinkName.bind(this)}
                initialName={this.state.homeLink}>
              <p>i am child</p>
            </Header> */}
            {headCmp}
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-xs-offset-11">
            <button onClick={this.onChangeHomeMounted.bind(this)} className="btn-success">(Un)mount Home Component</button>
          </div>
        </div>
        <hr />
      </div>
    )
  }
}

export default App;
