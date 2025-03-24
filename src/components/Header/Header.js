import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { FiShoppingCart } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import LowerHeader from "./LowerHeader"
import classes from './Header.module.css'
import { DataContext } from '../DataProvider/DataProvider';
import {auth} from '../../Utility/firebase';



function Header() {
    const [{ basket, user }, dispatch] = useContext(DataContext); // ✅ Correct way

// const [{ state, user }, dispatch] = useContext(DataContext);
// const basket = state?.basket || [];
const totalItem = basket.reduce((amount, item)=>{
//    return item.amount + amount 
   return (item.amount ?? 0) + amount; // Ensure amount is defined

},0)
// console.log("added Item  length to cart:", basket.length)
// console.log("Item added to cart: ", basket);
// console.log("Current state:", basket);
// console.log("Total Items in Cart:", totalItem);


  return (
    <section className={classes.fixed}>
    <section>
        <div className={classes.header__container}>
         {/* log  */}
        <div className={classes.logo__container}>
           
            <Link to='#'>
                <img src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='amazon log' />
                </Link>
                {/* Delivery */}
                
           <div>
          <div  className={classes.delivery}>
          <SlLocationPin />
          <p>Deliver to</p>
          <span>Ethiopia</span>
          </div>
         </div>
         </div>   
    
            {/* search  section*/}
            <div className={classes.search}>
            <select name='' id=''>
                <option value=''>All</option>
            </select>
            <input type='text' placeholder='search product'/>
            {/* icon */}
            <FaSearch size={38}/>
            </div>
            {/* other section */}
        <div className={classes.order_container}>
        <Link to='' className={classes.language}>
                    <img src='https://files.softicons.com/download/web-icons/vista-flags-icons-by-icons-land/ico/UnitedStates_US_USA_840_Flag1.ico' alt='' />
                <select name="" id=''>
                    <option value=''> En</option>
                    <RiArrowDropDownLine   size={35}/>


                </select>
                </Link>
            {/* three component */}
               <Link to={!user && '/auth'}>
               <div>
                {
                    user?(
                    <>
                    <p>Hello {user?.email?.split("@")[0]}</p>
                    <span onClick={()=>auth.signOut()}> Sign Out</span>
                    </>
                    ):(
                     <>
                     <p>Hello, sign in</p>
                     <span>Account & Lists</span>
                     </>
                    )
                }
                </div>
               </Link>
            {/* order */}
            <Link to='/orders'>
                <p>returns</p>
                <span>& Orders</span>
            </Link>
            {/* cart */}
            <Link to='/cart' className={classes.cart}>
             <FiShoppingCart  size={35}/>
             <span>{totalItem}</span>
            {/* <p>cart</p> */}
            </Link>
     </div>
     </div>
    
        </section>
        <LowerHeader/>
</section>
  )
}

export default Header
