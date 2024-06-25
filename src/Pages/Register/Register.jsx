import "./styles.css";
import logo from "./logo.svg";
import React, { useContext, useState } from 'react';
import UserContext from './UserContext'; 
import { useNavigate } from 'react-router-dom'; 
const Register = () => {
  const navigate = useNavigate();
  const { login } = useContext(UserContext);

  //const history = useHistory();
  const[SignUpState, SetSignUPState]=useState({
    Name:"",
    Email:"",
    PWD:"",
    CPWD:""
  })

  const [errors, setErrors] = useState({
    Name:"",
    Email:"",
    PWD:"",
    CPWD:""
  });
   const handleChange=(e)=>{

    const{name,value}=e.target;
    SetSignUPState({
      ...SignUpState,[name]:value
    })
   }

   const HandleSubmit=(e)=>{
    e.preventDefault();
    let errors = {};
    setErrors({
      Name:"",
      Email:"",
      PWD:"",
      CPWD:""
    });

    if(SignUpState.Name.trim()==""){    
      errors.Name="Name is required"      
    }

    if(SignUpState.Email.trim()==""){    
      errors.Email="Email is required"      
    }
    else if(!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(SignUpState.Email))){     
      errors.Email="Invalid Email"    
    }
    if(SignUpState.PWD.length<8){
        errors.PWD="Password must be 8 character"
    }
    if(SignUpState.PWD != SignUpState.CPWD){      
      errors.CPWD="confirm password is not matching"     
    }
    setErrors(errors);

    //history.push("/Home")
    console.log(SignUpState);
    if(JSON.stringify(errors)=='{}'){
    
    login(SignUpState)
    navigate('/home');
  }
   }
  return (
    <div className="page login-1">
     
      <div className="login-1-card">
        
        <h2>Sign Up!!!</h2>
        <form onSubmit={HandleSubmit}>
        <input type="text" name="Name" onChange={handleChange} placeholder="Name" />
        {errors.Name && <p style={{ color: 'red' }}>{errors.Name}</p>}

          <input type="email" name="Email" onChange={handleChange} placeholder="Email"  />
          {errors.Email && <p style={{ color: 'red' }}>{errors.Email}</p>}
       
          <input type="password" name="PWD" onChange={handleChange} placeholder="Password" />
          {errors.PWD && <p style={{ color: 'red' }}>{errors.PWD}</p>}

          <input type="password" name="CPWD" onChange={handleChange} placeholder="Confirm Password" />
          {errors.CPWD && <p style={{ color: 'red' }}>{errors.CPWD}</p>}
          <button type="submit" >Sign Up</button>
        </form>
        
      </div>
    </div>
  );
};

export default Register;