import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { AiFillDelete } from "react-icons/ai";
import {AiFillCodepenCircle} from "react-icons/ai";
import "../CSS/Cart.css"
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';

const Cart = () => {
    const [cart, setCart]= useState([])


    
useEffect(()=>{
    getMakeup()
},[1])
function getMakeup(){
    fetch("https://nordstrom1.onrender.com/api/cart").then((result)=>{
    result.json().then((resp)=>{
        console.log(resp)
        setCart(resp)
    })
})
}
function deleteItem(id){
    fetch(`https://nordstrom1.onrender.com/api/cart/${id}`,{
        method:"DELETE"
    }).then((result)=>{
        result.json().then((resp)=>{
            console.log(resp)
            getMakeup()
        })
    })
}
console.log(cart.length)

  return (
    <div>
    
    
      <div className='cart_page'>
        <div>
        { cart.map(cart=>{
            return(
                <>
                <hr />
                <div className='left_cart'>
                <div>
                    <img src={cart.img} alt="" width="80px" height="80px"/>
                </div>
                
                <div>
                <p>{cart.products_name}</p>
                <h2>{cart.price}</h2>
                </div>

                <div onClick={()=>deleteItem(cart.id)}>
                <AiFillDelete/>
                {/* <button >Del</button> */}
                </div>


                <div>
                    <p> + 1 -</p>
                </div>
                    
                </div>
                </>
            )
        })
      }
        </div>
        <div>
            {
                cart.map(cart=>{
                    return(
                        <>
                            
                        </>
                    )
                })
            }
           <div >
            <p>APPLY COUPON</p>
            <div className='coupon'>
                <input type="text" placeholder='Enter Gift code or discount code' />
                <button>Apply</button>
                <hr />
                <div>
                    <p><AiFillCodepenCircle/> </p>
                    <p>  View All Offers/ Promos for you!</p>
                </div>
                
            </div>
            <p>PRICE DETAILS</p>
            <div className='price'>
                <div>
                    <p>Subtotal (Inclusive of Taxes)</p>
                    <p>Tax</p>
                    <p>Shipping</p>
                    <hr />
                    <h2>TOTAL</h2>
                </div>
                <div>
                    <p>₹1200</p>
                    <p>₹99</p>
                    <p>Free</p>
                    <hr />
                    <h2>₹1299</h2>
                </div>
            </div>
            
           </div>
           <Link to={"/details"}>
           <button id='proceedto'>PROCEED TO PAY</button>
           </Link>
        </div>
        
      </div>
      
      
            
    </div>
    
  )
}

export default Cart
