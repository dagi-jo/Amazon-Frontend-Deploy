import React from 'react'
import { IoIosMenu } from "react-icons/io";
import classes from './Header.module.css'


function LowerHeader() {
  return (
    <div className={classes.main}>
      
      <ul>
       
        <li className=classes={.}><IoIosMenu />
            <p>All</p>
         </li>
        <li> Today's Deals </li>
        <li>customer service</li>
        <li>Registry</li>
        <li> Gift Cards </li>
        <li>Sell</li>

      </ul>
    </div>
  )
}

export default LowerHeader
