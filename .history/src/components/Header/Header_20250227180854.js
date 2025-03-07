import React from 'react'
import { FaSearch } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";


function Header() {
  return (
    <section>
        
        <div>
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
                <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFlag_icons_for_languages&psig=AOvVaw1ugYur-rco_6NsRfM64Vdy&ust=1740755295070000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKiNqIKR5IsDFQAAAAAdAAAAABAE' alt='' />
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
                <span>* Orders</span>
            </a>
            {/* cart */}
            <a to={"/cart"}>
            {/* icon */}
            <span>0</span>
            </a>
     </div>

        </section>

  )
}

export default Header
