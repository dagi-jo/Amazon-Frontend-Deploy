import React, { useState, useContext } from 'react'
import classes from "./SignUp.module.css"
import { Link, useNavigate, useLocation } from 'react-router-dom'
import {auth} from '../../Utility/firebase'
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth"
import {DataContext} from "../../components/DataProvider/DataProvider"
import { Type } from '../../Utility/action.type'
import { ClipLoader } from 'react-spinners'

function Auth() {
  const [email, setEmail] = useState('')
  const [password, setPassword]=useState('')
   const [error, setError] =useState('');
  const [user, dispatch]=useContext(DataContext)
  const navigate =useNavigate()
  const navStateData=useLocation();
  console.log(navStateData)

 const [loading, setLoading]=useState({
  signIn:false,
  signUp:false
})

  //  console.log(user)
const authHandler =async(e)=>{
  e.preventDefault()
  console.log(e.target.name);
  if(e.target.name==='signin'){
    setLoading({...loading,signIn:true})
  signInWithEmailAndPassword(auth,email,password)
  .then((userInfo)=>{
    // console.log(useInfo);
    dispatch({
      type:Type.SET_USER,
      user:userInfo.user
  });
  setLoading({...loading, signIn:false})
  navigate(navStateData?.state?.redirect || "/")
  }).catch((err)=>{
    //console.log(err.message)
    setError(err.message)
    setLoading({...loading,signUp:false})

  })
  }else{
    setLoading({...loading,signUp:true})
    navigate("/")

   //firebase auth 
   createUserWithEmailAndPassword(auth,email,password)
   .then((userInfo)=>
    {
      // console.log(userInfo)
       dispatch({type:Type.SET_USER,
      user:userInfo.user
  });
  setLoading({...loading,signUp:false})
  navigate(navStateData?.state?.redirect ||"/")


    }).catch((err)=>{
      setError(err.message)
      setLoading({...loading,signUp:false})

      // console.log(err)
    })
  }

}

  return (
      <section className={classes.login}>  
        {/* logo */}
        <Link to ="/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="" className={classes.loginimg}></img>
         </Link>
        {/* text box for user name and passwoerd */}
        <div className={classes.login_container}>
          <h1>Sign In</h1>
          {navStateData.state?.msg && (
          <small
           style={{
            padding: "5px",
            textAlign: "center",
            color: "red",
            fontWeight: "bold",
           }}
           >
            {navStateData.state?.msg}
          </small>
        )}
          
        <form >
          <div>
          <label htmlFor='email'>E-maile</label>
          <input value={email} onChange={(e)=>setEmail(e.target.value)} type='email' id= 'email' ></input>
          </div>
          <div>
          <label htmlFor='password'>Password</label>
          <input value={password} onChange={(e)=>setPassword(e.target.value)}
          type='password' id= 'password' ></input>
          </div>
{/* sign in button */}
  <button type="submit" onClick={authHandler} name="signin" className={classes.signinButton}>
    {
     loading.signIn? (<ClipLoader color='#000' size={15}/>):("Sign in")
    }
   </button>
       
       
         {/* agreenent */}
         <p> by signin in you agree to the amzon fakr clone condition of use and 
          nmcmxnmncm x,cm,
                   </p>
        {/* create your amazon account button which is sign up link */}
      <button type ='submit' onClick={authHandler} name="signup" className={classes.login_register_btn}>
      {
     loading.signUp? (<ClipLoader color='#000' size={15}/>):("  Create your Amazone account")
    }
       </button>
       {error && <small style={{paddingTop:"5px",color:"red"}}>{error}</small>} 
        
      </form>
        </div>
        
      </section>
    )
}

export default Auth
