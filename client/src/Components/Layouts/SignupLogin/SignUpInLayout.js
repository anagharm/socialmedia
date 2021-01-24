import React, { Component } from 'react';  
import { Route } from 'react-router-dom';  
import SignUpInHeader from './SignUpInHeader';
import SignUpInFooter from './SignUpInFooter';
  
const SignUpInLayout = ({ children }) => (                         
    <div>
    	<SignUpInHeader />
			{children}
		<SignUpInFooter />	  
    </div>  
);  
  
const SignUpInLayoutRoute = ({component: Component, ...rest}) => {  
return (  
  <Route {...rest} render={matchProps => (  
    <SignUpInLayout>  
        <Component {...matchProps} />  
    </SignUpInLayout>  
  )} />  
)  
};  
  
export default SignUpInLayoutRoute;  





// import React from 'react'
// import SignUpInHeader from './SignUpInHeader';
// import SignUpInFooter from './SignUpInFooter';

// export default class SignUpInLayout extends React.Component {
// 	render() {
// 		return (
// 			<div>
				// <SignUpInHeader />
				// <h1>SignUp and SignIn</h1>
				// <SignUpInFooter />			
// 			</div>
// 		)
// 	}
// }