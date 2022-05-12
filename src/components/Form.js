import React, {useState} from 'react';

const Form = (props) => {
  const[firstName, setFirstName]= useState ("");
  const[lastName, setLastName]= useState ("");
  const[email, setEmail]= useState ("");
  const[password, setPassword]= useState ("");
  const[confirmPassword, setConfirmPassword]= useState ("");

  return(
    <div>
      <form onSubmit={(e) =>e.preventDefault()}>
        <div>
          <label>First Name</label>
          <input type="text" onChange={ (e) => setFirstName(e.target.value)} />
        </div>
        <div>
          {firstName.length <2 && firstName.length>0?(<p>First name must be at least 2 characters!</p>) :null}
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" onChange= { (e) => setLastName(e.target.value) } />
        </div>
        <div>
          {lastName.length <2 && lastName.length>0?(<p>Last name must be at least 2 characters!</p>) :null}
        </div>
        <div>
          <label>Email</label>
          <input type="text" onChange= { (e) => setEmail(e.target.value) } />
        </div>
        <div>
          {email.length <5 && email.length>0?(<p>Email must be more than 5 characters!</p>) :null}
        </div>
        <div>
          <label>Password</label>
          <input type="password" onChange= { (e) => setPassword(e.target.value) } />
        </div>
        <div>
          {password.length <8 && password.length>0?(<p>Password must be at least 8 characters</p>) :null}
        </div>
        <div>
          <label>Confirm Password</label>
          <input type="password" onChange= { (e) => setConfirmPassword(e.target.value) } />
        </div>
        <div>
          {confirmPassword.length <8 && confirmPassword.length>0?(<p>Password must be at least 8 characters</p>) :null}
          {password!==confirmPassword?(<p>Passwords must match</p>) :null}
        </div>
        <input type="submit" value= "Create User"/>
      </form>
      <p>First Name {firstName}</p>
      <p>Last Name {lastName}</p>
      <p>Email {email}</p>
      <p>Password {password}</p>
      <p>Confirm Password {confirmPassword}</p>
    </div>
  );
};


export default Form;