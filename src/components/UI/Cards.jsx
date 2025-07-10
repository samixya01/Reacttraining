import React from 'react'
import { useNavigate } from 'react-router-dom'

function Cards({title,description,image}) {
    const navigate=useNavigate()
  return (
    <div className='grid gap-2 shadow-md border border-gray-100'>
        <img src={image} className='h-74 w-full object-cover' />
        <div className='p4 flex flex-col gap-4'>
            <h1 className='text-xl font-semibold'>{title}</h1>
            <div className='line-clamp-3'>{description}</div>
            <div onClick={()=>{
                navigate(`/card/${title}`)
            }

            }
            className='border border-blue-400 w-fit text-blue-400 h-fit px-10 py-2 cursor-pointer rounded-md'>Read more</div>
        </div>
      
    </div>
  )
}

export default Cards

