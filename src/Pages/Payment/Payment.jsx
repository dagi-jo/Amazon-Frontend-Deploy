import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';

import React, {useContext, useState} from 'react'
import LayOut from '../../components/LayOut/LayOut'
import classes from './Payment.module.css'
import { DataContext } from '../../components/DataProvider/DataProvider'
import { useNavigate } from "react-router-dom"; // Corrected import
import ProductCard from '../../components/Product/ProductCard'
import CurrencyFormat from '../../components/CurrencyFormat/CurrencyFormat';
import axiosInstance from '../../Api/axios';
import { ClipLoader } from 'react-spinners'
import { db} from "../../Utility/firebase"
import { Type } from "../../Utility/action.type";


function Payment() 
{
  const [{user, basket}, dispatch]= useContext(DataContext)
  const navigate = useNavigate(); // ✅ Define navigate here

  // console.log(user);
  
  const totalItem = basket?.reduce((amount, item)=>{
    //    return item.amount + amount 
       return (item.amount ?? 0) + amount; // Ensure amount is defined
    
    },0)

    const total = basket.reduce((amount, item)=>{
      return item.price * item.amount + amount
     },0)

    const [cardError, setCardError] = useState(null)
    const [processing, setProcessing]= useState(false)
    const stripe = useStripe();
    const elements = useElements();
    const handleChange=(e)=>{
      // console.log(e)
      e?.error?.message? setCardError(e?.error?.message):setCardError("")

    }
    const handlePayment = async(e) => {
      e.preventDefault();//not refresh
     try{
      setProcessing(true)
              //1. backend || functions--->contact to the client secret generate for payment

      const response= await axiosInstance({
        method:"POST",
        url: `/payment/create?total=${total *100}`,
        // responseType: "json", // Ensure JSON response is expected

      });
      console.log(response.data);
      const clientSecret = response.data?.clientSecret;

        //2. client side (react side confirmation)
     const {paymentIntent}= await stripe.confirmCardPayment(
      clientSecret,
      {
      payment_method:{
        card: elements.getElement(CardElement),
      },
    });
    // console.log(paymentIntent);
          //3. after the confirmation-->order firestore database save, clear basket
         await db.collection("users")?.doc(user.uid)?.collection("orders")?.doc(paymentIntent.id)?.set({
          basket: basket,
          amount:paymentIntent.amount,
          created: paymentIntent.created,
         });
         //empty the basket
         dispatch({type: Type.EMPTY_BASKET});
          setProcessing(false)
          navigate("/orders", { state: { msg: "You have placed a new order" } });

          // useNavigate("/orders",{state:{msg:"you have placed new order"}} )
    } catch(error){ 
      console.log(error)
      setProcessing(false)
     }


    };
  return (
    <LayOut>
      {/* header */}
    <div className={classes.Payment_header}>
      Checkout({totalItem}) items</div> 
     {/* payment method  */}
     <section className={classes.Payment} >
{/* adress */}
<div className={classes.flex}>
<h3>Delivery Adress</h3>
<div >
  <div>{user?.email}</div>
  <div>123 react lane</div>
  <div>Chicago, IL</div>

</div>
</div>
<hr/>

{/* product */}
<div className={classes.flex}>
  <h3>Review items and delivery</h3>
  <div>
    {
      basket?.map((item, index)=> (
      <ProductCard key={item.id || index} product={item} flex={true}/>
    ))}
  </div>
</div>
<hr/>
{/* card form */}
<div className={classes.flex}>
  <h3>Payment methods</h3>
  <div className={classes.payment_card_container}>
    <div className={classes.payment_details}>
      <form onSubmit={handlePayment}>
      {/* error  */}
        {cardError && <small style={{color:'red'}}>{cardError}</small>}
      {/* card element  */}
     <CardElement onChange={handleChange}/>
{/* price  */}
    <div className={classes.payment_price}> 
      <div>
        <span style={{display: 'flex', gap: "10px"}}>
           <p>Total Order |</p> <CurrencyFormat amount={total}/>
        </span>
      </div>
   <button type='submit'>
    
    {
      processing? (
        <div className={classes.loading}>
          <ClipLoader color='gray' size={15}/>
        <p> please Wait..</p>
        </div>
        ):"Pay Now"
    }
    </button>
  </div>

      </form>
    </div>
  </div>
</div>

     </section>
      </LayOut>
    )
}

export default Payment
