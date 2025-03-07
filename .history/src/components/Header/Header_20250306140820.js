import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { FiShoppingCart } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import LowerHeader from "./LowerHeader"

import classes from './Header.module.css'
import { DataContext } from '../DataProvider/DataProvider';



function Header() {
const [basket, dispach]= useContext(DataContext)

console.log(basket.length)
console.log("Item added to cart: ", product);

  return (
    <>
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
            <FaSearch size={25}/>
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
               <Link to='/auth'>
                <p>Sign In</p>
                <span>Account & Lists</span>
               </Link>
            {/* order */}
            <Link to='/orders'>
                <p>returns</p>
                <span>& Orders</span>
            </Link>
            {/* cart */}
            <Link to='/cart' className={classes.cart}>
             <FiShoppingCart  size={35}/>
             <span>0</span>
            {/* <p>cart</p> */}
            </Link>
     </div>
     </div>
    
        </section>
        <LowerHeader/>
</>
  )
}

export default Header
