import React,{useEffect,createContext,useReducer,useContext} from 'react'
import './App.css'


import NavBar from './components/Navbar'
import {BrowserRouter,Route,Switch,useHistory} from 'react-router-dom'
import Home from './components/screens/Home'
import Profile from './components/screens/Profile'
import Signin from './components/screens/SignIn'
import SignUp from './components/screens/Signup'
import CreatePost from './components/screens/CreatePost'
import  {reducer,initialState} from './reducers/userReducer'

export const UserContext=createContext()

const Routing =()=>{
    const {state,dispatch}=useContext(UserContext)
    const history=useHistory()
    useEffect(()=>{
      const user=JSON.parse(localStorage.getItem('user'))
      if(user)
      {
        dispatch({type:'USER',payload:user})
        history.push('/')
      }
      else
       history.push('/signin')
    },[])

  return(
      <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/signin'>
            <Signin/>
          </Route>
          <Route path='/signup'>
            <SignUp/>
          </Route>
          <Route path='/profile'>
            <Profile/>
          </Route>
          <Route path='/create'>
            <CreatePost/>
          </Route>
      </Switch>
  )
}

function App() {
  const [state,dispatch]=useReducer(reducer,initialState)

  return(
    <UserContext.Provider value={{state,dispatch}}>
      <BrowserRouter>
        <NavBar/>
        <Routing  />
      </BrowserRouter>
      </UserContext.Provider>  
  );
}

export default App;
