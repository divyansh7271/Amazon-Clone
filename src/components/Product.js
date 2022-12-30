import React,{useState} from 'react'
import Image from 'next/dist/client/image'
import { StarIcon } from '@heroicons/react/outline'
import Currency from "react-currency-formatter"

function Product({id,title,price,description,category,image,rating}) {
  
  const [hasPrime] = useState(Math.random() < 0.6)  
  
  return (
    <div className='relative flex bg-white flex-col m-5 z-30 p-10'>
        <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>
        
        <Image src={image} height={200} width={200} objectFit="contain" />
        
        <h4>{title}</h4>

        <div className='flex'>
            {Array(Math.ceil(rating.rate)).fill().map((_,i) => (
                <StarIcon  className='h-5 text-yellow-500 fill-current'/>
            ))}          
            <p className='text-sm pl-1 items-center'>{rating.count}</p>

        </div>  

        <p className='text-xs my-2 line-clamp-2'>{description}</p>

        <div className='mb-5'> 
            <Currency quantity={price} currency="GBP" />
        </div>

        {hasPrime && (
            <div className='flex items-center space-x-2 mt-5'>
                <img className='w-12' src="https://links.papareact.com/fdw" alt="" />
                <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
            </div>
        )}

        <button className='mt-auto button'>Add to Basket</button>
    </div>
  )
}

export default Product