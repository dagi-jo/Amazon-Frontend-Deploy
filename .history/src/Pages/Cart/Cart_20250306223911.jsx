import React, { useContext } from 'react'
import LayOut from '../../components/LayOut/LayOut'
import { DataContext } from '../../components/DataProvider/DataProvider'
import ProductCard from '../../components/Product/ProductCard'
import CurrencyFormat from '../../components/CurrencyFormat/CurrencyFormat'
import { Link } from 'react-router-dom'
impo

function Cart() {
  const [{basket, user}, dispatch]= useContext(DataContext)
  const total = basket.reduce((amount, item)=>{
   return item.price + amount
  },0)
  return (
    <LayOut>
      <section className={classes.cart_container}>
        <div>
          <h2>Hello</h2>
          <h3>your shopping basket</h3>
          <hr/>
          {
            basket?.length==0?(<p>Opps ! No item in your cart</p>):(
               basket?.map((item,i)=>{
                return  <ProductCard 
                key={i}
                product={item}
                renderDesc={true}
                renderAdd={false}
                flex={true}/>
              }) )        
         }
        </div>
              
        {basket?.length!==0 &&(

          <div>
            <div>
              <p>Subtotal ({basket?.length} items) </p>
              <CurrencyFormat amount ={total}/>
            </div>
            <span>
            <input type='checkbox'/>
            <small> This order contain a gift</small>
            </span>
            <Link to ="/payments">continue to checkout </Link>
             </div>

        )}
        
      </section>
    </LayOut>
  )
}

export default Cart
