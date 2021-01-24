import React, { Component } from 'react';  
import { Route } from 'react-router-dom'; 
import WallHearder from './WallHearder';
import WallFooter from './WallFooter';

const WallLayout = ({ children }) => (                         
    <div>
    	<WallHearder />
			{children}
		<WallFooter /> 
    </div>  
);  
  
const WallLayoutRoute = ({component: Component, ...rest}) => {  
return (  
  <Route {...rest} render={matchProps => (  
    <WallLayout>  
        <Component {...matchProps} />  
    </WallLayout>  
  )} />  
)  
};  
  
export default WallLayoutRoute; 


// export default class WallLayout extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<WallHearder />
// 				<h1> Wall </h1>
// 				<WallFooter />					
// 			</div>
// 		)
// 	}
// }