import React, { Component } from 'react';
import LoginView from './containers/login-view.js';
import PackageView from './containers/package-view.js';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {auth: false};
  }

  validate=()=>{
    this.setState(()=>({auth:true}));
  };

  onClose = () => {
    this.setState(()=>({auth:false}));
  }

  render() {
    let view = this.state.auth ? <PackageView onClose={this.onClose}/> : <LoginView onValidate={this.validate}/>
    return view;
  }
}
