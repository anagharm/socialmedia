import React, { Component } from 'react';  
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';  
  
/** Layouts **/  
import SignUpInLayoutRoute from "../SignupLogin/SignUpInLayout.js";  
import PersonalProfileLayoutRoute from "../PersonalProfile/PersonalProfileLayout.js";  
import WallLayoutRoute from "../Wall/WallLayout.js";  
  
/** Components **/  
import SignIn from '../../Features/SignUpIn/SignIn.js';  
import SignUp from '../../Features/SignUpIn/SignUp.js';  
import Blogs from '../../Features/Blogs/Blogs.js';  
import PersonalInfo from '../../Features/PersonalInfo/PersonalInfo.js';  
  
/* 
   App 
 */  
class LayoutCall extends Component {  
  render() {  
    return (  
      <Router>  
        <Switch>  
          <Route exact path="/">  
            <Redirect to="/signin" />  
          </Route>  
          <SignUpInLayoutRoute path="/signin" component={SignIn} />  
          <SignUpInLayoutRoute path="/signup" component={SignUp} />  

          <PersonalProfileLayoutRoute path="/personal" component={PersonalInfo} />  
          
          <WallLayoutRoute path="/wall" component={Blogs} />  
        </Switch>  
      </Router>  
    );  
  }  
}  
  
export default LayoutCall;


// import React from 'react'
// import { BrowserRouter, Route, Link } from "react-router-dom";

// export default class LayoutCall extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				Layout
// 			</div>
// 		)
// 	}
// }