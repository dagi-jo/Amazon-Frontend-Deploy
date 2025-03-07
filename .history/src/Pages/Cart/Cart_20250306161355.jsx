import React, { useContext } from 'react'
import LayOut from '../../components/LayOut/LayOut'
import { DataContext } from '../../components/DataProvider/DataProvider'

function Cart() {
  const [{basket, user}, dispatch]= useContext(DataContext)
  return (
    <LayOut>
      <section>
        <div></div>
        D
      </section>
    </LayOut>
  )
}

export default Cart
