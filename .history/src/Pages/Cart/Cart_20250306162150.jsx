import React, { useContext } from 'react'
import LayOut from '../../components/LayOut/LayOut'
import { DataContext } from '../../components/DataProvider/DataProvider'
import ProductCard from '../../components/Product/ProductCard'

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
            Basket?.length==0(<p>Opps ! No item in your cart</p>):(
              basket.?map(item)=> {
                return <ProductCard 
                product={=ite}/>
              }
            )
          }
        </div>
        <div>       
        </div>
      </section>
    </LayOut>
  )
}

export default Cart
