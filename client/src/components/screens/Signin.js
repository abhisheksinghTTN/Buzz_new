import React,{useState,useContext} from 'react'
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'
import {UserContext} from '../../App'

const SignIn=()=>{
    const history=useHistory();
    const {state,dispatch}=useContext(UserContext)
    const [password, setPassword]=useState("");
    const [email, setEmail]=useState("");

    const PostData =  ()=>{
         fetch('/signin',{
        method:'post',
        headers:{
           "Content-Type":"application/json",
           'Accept': 'application/json'
        },
        body:JSON.stringify({
           password,
           email 
         })
        }).then(res=>res.json())
         .then(data=>{
             console.log(data);
            if(data.err)
               M.toast({html: data.error,classes:'#f44336 red'})
            else{
                localStorage.setItem("jwt",data.token);
                localStorage.setItem("user",JSON.stringify(data.user))
                dispatch({type:"USER",payload:data.user})
               M.toast({html: "Signedin Successfully",classes:'#1b5e20 green darken-4'})
               history.push('/')
               
            }
         }).catch(err=>{
            console.log(err)
         }) 
        
    }

    return(
        <div className="mycard">
            <div className="card auth-card">
              <h2>Welcome, Log In To Your Account</h2>
              <input type="text" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>  
              <input type="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}></input> 
              <button className="btn waves-effect  #ea80fc purple darken-1" 
               onClick={PostData}
              >Sign In</button>
              <h5>
                  <Link to='/signup'>Don't have an account </Link>
              </h5>
           </div>
        </div>
    );
}

export default SignIn;