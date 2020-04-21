import React, { Component } from 'react';

// import PropTypes from 'prop-types';//类型检查

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: this.props.intialAge,
      status: 0,
      // homeLink: "changed link",
      homeLink: props.initialName
    }
    this.onMarkOlder = this.onMarkOlder.bind(this);
    setTimeout(() => {
      this.setState({
        status: 1
      })
    },3000)
  } 
  onMarkOlder() {
    this.setState({
      age: this.state.age + 3
    })
  }
  handleGreat() {
    this.props.greet(this.state.age)
  }
  onChangeLink() {
    this.props.changeLink(this.state.homeLink)
  }
  onHandleChange(event) {
    this.setState({
      homeLink: event.target.value
    })
  }

  componentWillUnmount() {
    console.log('Component will unmount');
    clearTimeout(this.state.status)
  }

  render (){
    console.log(this.props)
    console.log(this.state)
    return (
      <div>
        <h1>Header</h1>
        <div>your name is {this.props.name}, your age is {this.state.age}</div>
        <p>Status: {this.state.status}</p>
        <div>
          <h4>hobbies</h4>
          <ul>
            {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
          </ul>
        </div>
        <div>{this.props.children}</div>
        <button onClick={this.onMarkOlder} className="btn btn-primary">Make me older</button>
        <hr />
        <button onClick={this.handleGreat.bind(this)} className="btn btn-primary">Greet</button>
        <hr />
        <button onClick={this.onChangeLink.bind(this)} className="btn-primary">Changed Link</button>
        <hr />
        <input type="text" defaultValue={this.props.initialName} value={this.state.initialName} onChange={(e) => this.onHandleChange(e)}/>
        <hr />
      </div>
    )
  }
}

export default Header;

// Header.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number,
//   user: propTypes.object
// };