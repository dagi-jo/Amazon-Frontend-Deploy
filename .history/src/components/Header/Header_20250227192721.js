import React from 'react'
import { FaSearch } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { FiShoppingCart } from "react-icons/fi";
import classes from './Header.module.css'



function Header() {
  return (
    <section>
        <d
        <div className={classes.header__container}>
            {/* log  */}
            <a href=''>
                <img src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='amazon log' />
                </a>
                {/* Delivery */}
                
           <div>
          <span> <SlLocationPin /> </span>
            <p>Deliver to</p>
            <span>Ethiopia</span>
            </div>
         </div>   
        <div>
            {/* search */}
            <select name='' id=''>
                <option value=''>All</option>
            </select>
            <input type='text' name='' id='' placeholder='search product'/>
            {/* icon */}
            <FaSearch />

        </div>
        {/* right side link */}
        <div>
            <div>
                <img src='https://files.softicons.com/download/web-icons/vista-flags-icons-by-icons-land/ico/UnitedStates_US_USA_840_Flag1.ico' alt='' />
                <section>
                    <option value=''> EN</option>
                </section>
            </div>
            {/* three component */}
        
               <a href=''>
                <div>
                <p>Sign In</p>
                <span>Account & Lists</span>
                </div>
               </a>
            {/* order */}
            <a href=''>
                <p>returns</p>
                <span>& Orders</span>
            </a>
            {/* cart */}
            <a to={"/cart"}>
            {/* icon */}
            
            <span><FiShoppingCart />0</span>
            <p>cart</p>
            </a>
     </div>

        </section>

  )
}

export default Header
