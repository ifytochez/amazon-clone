import React, { useEffect } from 'react';
import './App.css';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment'
import Orderss from './Orderss';
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from './StateProvider';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  'pk_test_51KjYt8HKeqKNymNgtckrZdY0kp5dTVt7YAmhRZV4CkUEP7VYy44sAYcU3iFhLtiGebGOHODYPeAtlMg6ICuIQ8oU00PeXYYLdG')

function App() {
  const [{}, dispatch]= useStateValue();

  useEffect(() => {
// will only work when the app component loads
    auth.onAuthStateChanged(authUser => {
      console.log("THIS USER IS >>>", authUser);

      if (authUser) {
        // the user just log in or was logged in

        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }else{
        // the user is logged out

        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, [])
  return (
    <Router>
        <div className="app">
           {/* <Header></Header> */}

          <Routes>
            <Route path='/' element={<Home/>}/> 
            <Route path='/checkout' element={<Checkout/>}/> 
            <Route path='/login' element={<Login/>}/>
            <Route path='/payment' element={<Elements stripe={promise}><Payment/></Elements>}/>
            <Route path='/orders' element={<Orderss/>}/>
          </Routes>   
            
          
        </div>
    </Router> 
  );
}

export default App;
// in order to remove the header from the global level so it wont show even where i dont want it,
// i removed it from app js and imported it where needed