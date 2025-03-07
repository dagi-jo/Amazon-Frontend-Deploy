import React from 'react'
import { FaSearch } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { FiShoppingCart } from "react-icons/fi";
import classes from './Header.module.css'



function Header() {
  return (
    <section>
        <div className={classes.header__container}>
         {/* log  */}
        <div className={classes.logo__container}>
           
            <a href=''>
                <img src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='amazon log' />
                </a>
                {/* Delivery */}
                
           <div>
          <span> <SlLocationPin /> </span>
          <div  className={classes.delivery}>
          <p>Deliver to</p>
          <span>Ethiopia</span>
          </div>
         </div>
         </div>   
        <div>
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
        <a href='' className='cl'>
                    <img src='https://files.softicons.com/download/web-icons/vista-flags-icons-by-icons-land/ico/UnitedStates_US_USA_840_Flag1.ico' alt='' />
                <section name="" id=''>
                    <option value=''> EN</option>
                </section>
                </a>
            {/* three component */}
               <a href=''>
                <p>Sign In</p>
                <span>Account & Lists</span>
               </a>
            {/* order */}
            <a href=''>
                <p>returns</p>
                <span>& Orders</span>
            </a>
            {/* cart */}
            <a href=''>
             <FiShoppingCart  size={35}/>
             <span>0</span>
            <p>cart</p>
            </a>
     </div>
     </div>
     </div>
        </section>

  )
}

export default Header
