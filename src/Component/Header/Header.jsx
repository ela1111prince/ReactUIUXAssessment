import React,{useContext,use} from 'react'
import './Header.css'
import UserContext from '../../Pages/Register/UserContext'
import { useNavigate } from 'react-router-dom'; 

const Header = ({ callSiblingFunction }) => {
  const handleClick = () => {
    // Call the function passed from parent
    callSiblingFunction();
  };
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout=()=>{
    navigate('/');

  }

  if(!user){
    navigate('/');
  }
  return (
    <>
    <div className='Header'>
      <span className='HeaderLeftContent'>
     <button onClick={handleClick}> <span className="material-symbols-outlined">menu</span></button>
        <h2>Indpro</h2>
        </span>
        <span className='UserDetails'><span className='UserName'>{user?user.Name:""} </span>
        <button onClick={handleLogout}> <span>Logout</span>  <span className="material-symbols-outlined">logout</span></button> </span>
    </div>
    
    </>
  )
}

export default Header