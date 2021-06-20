import React, { useState } from 'react'
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'

const SignUp=()=>{
   const history=useHistory();
    const [name, setName]=useState("");
    const [password, setPassword]=useState("");
    const [email, setEmail]=useState("");

    const PostData = async ()=>{
        await fetch('/signup',{
        method:'post',
        headers:{
           "Content-Type":"application/json",
           'Accept': 'application/json'
        },
        body:JSON.stringify({
           name,
           password,
           email 
         })
        }).then(res=>res.json())
         .then(data=>{
            if(data.err)
               M.toast({html: data.error,classes:'#f44336 red'})
            else{
               M.toast({html: data.message,classes:'#1b5e20 green darken-4'})
               history.push('/signin')
            }
         }).catch(err=>{
            console.log(err)
         }) 
        
    }
    return(
        <div className="mycard">
            <div className="card auth-card">
              <h2>SignUp</h2>
              <input type="text" placeholder='name' value={name} onChange={(e)=>setName(e.target.value)}></input>  
              <input type="text" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>  
              <input type="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}></input> 
              <button className="btn waves-effect  #ea80fc purple accent-1"
               onClick={()=>PostData()}
               >SignUp</button>
              <h5>
                  <Link to='/signin'>Already have an account</Link>
              </h5>
           </div>
        </div>
    );
}

export default SignUp;