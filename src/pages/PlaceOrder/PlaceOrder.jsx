import React from 'react'
import './PlaceOrder.css'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
const PlaceOrder = () => {
  const {getTotalAmount}=useContext(StoreContext)
  return (
    <form className='place-order'>
        <div className="place-order-left">
           <p className='title'>Delivery Information</p>
           <div className="multi-fields">
            <input type="text" placeholder='First Name' />
            <input type="text" placeholder='last Name' />
           </div>
           <input type="text" placeholder='Email address'/>
           <input type="text" placeholder='Street'/>
           <div className="multi-fields">
            <input type="text" placeholder='City' />
            <input type="text" placeholder='State' />
           </div>
           <div className="multi-fields">
            <input type="text" placeholder='Zip Code' />
            <input type="text" placeholder='Country' />
           </div> 
           <input type="text" placeholder='Phone' />
        </div>
        <div className="place-order-right">
        
        <div className="cart-total">
          <h2>cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalAmount()}</p>
            </div>
            <hr />
              <div className='cart-total-details'>
                <p>Delivery Fee</p>
                <p>${getTotalAmount()===0?0:2}</p>
              </div>
              <hr />
              <div className='cart-total-details'>
                 <p>Total</p>
                 <p>${getTotalAmount()===0?0:getTotalAmount()+2}</p>
              
            </div>
            
          </div>
          <button  >PROCEED TO PAMYMENt</button>
        </div>
        </div>
       
    </form>
  )
}

export default PlaceOrder