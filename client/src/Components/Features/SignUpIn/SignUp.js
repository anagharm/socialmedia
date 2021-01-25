import React, { Component } from 'react'; 
import "./signInUp.css"

const SignUp = ({  classes }) => {  
    return (  
        <div className="container-fluid" >
	            <div className="container bg-white pb-5">
				    <div className="row d-flex justify-content-start align-items-center mt-sm-5">
				        <div className="col-lg-5 col-10">
				            <div className="pb-5"> 
				            	<img src="/AnaghaALogo.png" alt="" /> 
				            </div>
				        </div>
				        <div className="col-lg-4 offset-lg-2 col-md-6 offset-md-3">
				            <div className="pt-4">
				                <h3 className="text-success"><span className="fa fa-superpowers text-primary px-md-2"></span>Anagha's Life</h3>
				            </div>
				            <div className="mt-3 mt-md-5">
				                <h5>Create your account</h5>
				                <form className="pt-4">
				                    <div className="d-flex flex-column pb-3"> 
				                    	<label htmlFor="password">Full Name</label> 
				                    	<input type="text" name="name" id="name" className="border-bottom border-success inputBorder" /> 
				                    </div>
				                    <div className="d-flex flex-column pb-3"> 
				                    	<label htmlFor="email">Email Address</label> 
				                    	<input type="email" name="email" id="emailId" className="border-bottom border-success inputBorder" /> 
				                    </div>
				                    <div className="d-flex flex-column pb-3"> 
				                    	<label htmlFor="password">Password</label> 
				                    	<input type="password" name="passwrd" id="pwd" className="border-bottom border-success inputBorder" /> 
				                    </div>
				                    <input type="button" value="Sign Up" className="inputBorder btn btn-success btn-block mb-3" /> 
				                    <div className="register mt-5">
				                        <p>Already have an account? <a href="/signin">Sign In</a></p>
				                    </div>
				                </form>
				            </div>
				        </div>
				    </div>
				</div>   
	        </div> 
    );  
  };  
  
  export default SignUp  