import React from 'react';
import { useCart } from '../context/CartContext';


const Cart = () => {
    const {cart,removeFromCart} = useCart();

    const total = cart.reduce((acc,data)=> acc + data.price*data.qty, 0)
  return (
    <div className='container mx-auto py-10 px-6'>
     <h1 className='text-3xl font-bold mb-6'>Your Cart</h1>
     {cart.length === 0 ?(
        <p className='text-gray-600'>Your cart is empty.</p>
     ):(
        <div>
            <ul className='space-y-4'>
                {cart.map((data)=>(
                    <li 
                    key={data.id}
                    className='flex justify-between items-center border-b pb-2'>
                    <div className='flex items-center gap-4'>
                    <img src={data.img} alt={data.name} className='w-16 h-16 object-contain'/>
                    <div>
                        <h2 className='font-semibold'>{data.name}</h2>
                        <p>Price: ${data.price}</p>
                        <p>Quantity: {data.qty}</p>
                    </div>
                    </div>
                    <button onClick={()=> removeFromCart(data.id)} className='px-3 py-1 bg-red-500 text-white rounded-lg ' >
                        Remove
                    </button>
                    </li>
                ))}
            </ul>

            {/* Grand total section */}
            <div className='mt-8 flex justify-end'>
                <div className='text-right'>
                 <h2 className='text-xl font-semibold'>Grand Total:</h2>
                 <p className='text-2xl font-bold text-green-600'>${total.toFixed(2)}</p>
                </div>
            </div>
        </div>
     )}
    </div>
  )
}

export default Cart