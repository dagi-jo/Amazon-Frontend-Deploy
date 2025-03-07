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
                <img src='https://stock.adobe.com/images/set-of-language-buttons-with-national-flags/327370398' alt='' />
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
