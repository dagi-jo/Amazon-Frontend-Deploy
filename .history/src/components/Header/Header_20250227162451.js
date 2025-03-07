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
           <div>
            <p>Deliver to</p>
            <span>Ethiopia</span>
            </div>
        <div>
            {/* search */}
            <select name='' id=''>
                <option value={}>All</option>
            </select>
            <input type='text' name='' id='' placeholder='search product'/>
            {/* icon */}
        </div>
        {/* right side link */}
        <div>
            <div>
                <img src='' alt='' />
                <section>
                    <option value={}> EN</option>
                </section>
            </div>
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
        </div>

        </section>
      
    </section>
  )
}

export default Header
