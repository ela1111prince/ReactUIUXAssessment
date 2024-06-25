import './App.css';
import {lazy,Suspense,useRef ,useState} from 'react'

import {Sidebar1} from './Component/Sidebar1/Sidebar1'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import Register from './Pages/Register/Register'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import {Route,Routes,useLocation} from 'react-router-dom';
import Home from './Pages/Home/Home'
import { UserProvider } from './Pages/Register/UserContext';
function App() {

  const childRef = useRef(null);
  const location=useLocation();
  const handleSidebar = () => {
    
    if (childRef.current) {
      childRef.current.handleSideBarClick();
    }
  };
  const [user, setUser] = useState("");
  const SetUserDetails=(username)=>{
    setUser(username)
  }
  return (
    <UserProvider>
    <Suspense>
    <div className="App">
 
{(location.pathname=="/")?<Register/>: 

      <>
      <Header callSiblingFunction={handleSidebar}></Header>
      <div className='BodyContent'>
      <Sidebar1 childFunction={childRef}></Sidebar1>
      <Routes>
      <Route path="/" element={<Register/>}/>

  <Route path="/Home" element={<Home/>}/>
  <Route path="/ProductDetails" element={<ProductDetails/>}/>


</Routes>
</div>
<Footer></Footer>
</> 


}
    </div>
    </Suspense>
    </UserProvider>
  );
}

export default App;
