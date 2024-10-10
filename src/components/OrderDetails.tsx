"use client"

import { Orders, Order, Topping, Note } from '@/tools/orders.model';
import { FaPizzaSlice, FaCircleInfo, FaList, FaNoteSticky } from 'react-icons/fa6';

export default function OrderDetails({order}:{order:Order}) {
    return (
        <div className='my-4'>  
            <div className='text-sm'>
                <div className='text-2xl text-accent font-semibold mb-4'>Order #{order.id}:</div>

                <div className='mb-3'>
                    <div className='font-bold'><FaCircleInfo className='inline-block'></FaCircleInfo> Customer Information</div>
                    <div>{order.name}</div>
                    <div>{order.address}</div>
                    <div>{order.city}</div>
                </div>

                <div className='mb-3'>
                    <div className='font-bold'><FaPizzaSlice className='inline-block'></FaPizzaSlice> Pizza Size</div>
                    <div>{order.size}</div>
                </div>

                <div className='mb-3'>
                    <div className='font-bold'><FaList className='inline-block'></FaList> Order Details</div>
                    {order.toppings.map((toppings:Topping, x:number) => (
                        <div key={x}>
                            <div>{toppings.topping}</div>
                        </div>
                    ))}
                </div>

                <div className='mb-4'>
                    <div className='font-bold'><FaNoteSticky className='inline-block'></FaNoteSticky> Order Notes</div>
                    {order.notes.map((notes:Note, y:number) => (
                        <div key={y}>
                            <div>{notes.note}</div>
                        </div>
                    ))}
                </div>
            </div>
    </div>
    );
}