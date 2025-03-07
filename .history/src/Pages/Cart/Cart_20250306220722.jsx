import React, { useContext } from 'react'
import LayOut from '../../components/LayOut/LayOut'
import { DataContext } from '../../components/DataProvider/DataProvider'
import ProductCard from '../../components/Product/ProductCard'
import CurrencyFormat from '../../components/CurrencyFormat/CurrencyFormat'

function Cart() {
  const [{basket, user}, dispatch]= useContext(DataContext)
  return (
    <LayOut>
      <section>
        <div>
          <h2>Hello</h2>
          <h3>your shopping basket</h3>
          <hr/>
          {
            basket?.length==0 ?(<p>Opps ! No item in your cart</p>):(
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
              
        {basket?.length!==0(

          <div>
            <div>
              <p>Subtotal ({basket?.length} items) </p>
              <CurrencyFormat amount ='total'/>
            </div>
            <span>
            <input type='checkbox'/>
            <small> This order contain a gift</small>
            <button></button>
            </span>
             </div>
        )}
        
      </section>
    </LayOut>
  )
}

export default Cart
