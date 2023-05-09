import { background } from '@/data'
import { IMovie } from '@/interface/Movie'
import React from 'react'

const Cart = ({Title, Poster} : IMovie) => {
  return (
    <div className="card  border rounded-lg relative group h-[20rem]">
      <img src={Poster} className='w-full h-full group-hover:scale-105 transition-all object-cover group-hover:blur-sm'/>
      <div className='absolute bottom-0 items-center left-0 w-full bg-blue-600
      transition-all flex justify-center h-[20%] opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 rounded-lg'>
        <p className='text-sm lg:text-md truncate'>{Title}</p>
      </div>
    </div>
  )
}

export default Cart
