import React, { Component } from 'react';  
import { Route } from 'react-router-dom'; 
import PersonalProfileHeader from './PersonalProfileHeader';
import PersonalProfileFooter from './PersonalProfileFooter';

const PersonalProfileLayout = ({ children }) => (                         
    <div>
    	<PersonalProfileHeader />
			{children}
		<PersonalProfileFooter /> 
    </div>  
);  
  
const PersonalProfileLayoutRoute = ({component: Component, ...rest}) => {  
return (  
  <Route {...rest} render={matchProps => (  
    <PersonalProfileLayout>  
        <Component {...matchProps} />  
    </PersonalProfileLayout>  
  )} />  
)  
};  
  
export default PersonalProfileLayoutRoute;  

// export default class PersonalProfileLayout extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<PersonalProfileHeader />
// 				<h1>Personal Profile</h1>
// 				<PersonalProfileFooter />				
// 			</div>
// 		)
// 	}
// }