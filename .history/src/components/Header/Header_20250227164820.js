import React from 'react'

function Header() {
  return (
    <section>
        <section>
        <div>
            {/* log  */}
            <a href=''>
                <img src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='amazon log' />
                </a>
                {/* Delivery */}
                <span>
                    {/* icon */}
                </span>
         </div>
           <div>
            <p>Deliver to</p>
            <span>Ethiopia</span>
            </div>
         </section>   
        <div>
            {/* search */}
            <select name='' id=''>
                <option value=''>All</option>
            </select>
            <input type='text' name='' id='' placeholder='search product'/>
            {/* icon */}
        </div>
        {/* right side link */}
        <div>
            <div>
                <img src='' alt='' />
                <section>
                    <option value=''> EN</option>
                </section>
            </div>
            <div>
               <a href=''>
                    <p>Sign In</p>
                    <span>Account & Lists</span>
              </a></div>
            {/* order */}
            <div>
            <a href=''>
                <p>returns</p>
                <span>* Orders</span>
            </a>
            </div>
            {/* cart */}
            <div>
            <a to={"/cart"}>
            {/* icon */}
            <span>0</span>
            </a>
        </div>

        </section>
      

  )
}

export default Header
