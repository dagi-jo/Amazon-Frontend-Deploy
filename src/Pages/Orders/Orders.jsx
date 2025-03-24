import React, {useContext,useState, useEffect} from 'react'
import LayOut from '../../components/LayOut/LayOut'
import { db } from '../../Utility/firebase'
import { DataConnect } from 'firebase/data-connect'
import { DataContext } from '../../components/DataProvider/DataProvider'
import  classes from "./Order.module.css"
import ProductCard from '../../components/Product/ProductCard'

function Orders() {
  const [{user}, dispatch]= useContext(DataContext)
const [orders, setOrders]=useState([])
  useEffect(()=>{
if (user){
db.collection("users").doc(user.uid).collection("orders").orderBy("created","desc").onSnapshot((snapshot)=>{
  console.log(snapshot);
  setOrders(
    snapshot.docs.map((doc)=>({
      id: doc.id,
      data: doc.data(),
    }))
  );
})

}else{
setOrders([]);
}
  }, [])
  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.orders_container}>
          <h2>your Orders</h2>
          <hr/>
          {
            orders?.length===0 && <div style={{padding: '20px'}}> you don't have orders yet.</div>
          }
          {/* order items */}
          <div>{
            orders?.map((eachOrders,i)=> {
              return(
                <div key={i}>
                  <hr/>
                 <p>Order ID: {eachOrders?.id}</p>    
                 {
                  eachOrders?.data?.basket?.map(order=>
                  (
                       <ProductCard
                    flex={true}
                    product={order}
                    key={order.id}
                    />
                  )
                  )
                 }           
                 </div>
              )
            })
           } </div>
          </div></section>
      </LayOut>
    )
}

export default Orders
