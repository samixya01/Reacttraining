import React from 'react'
import { useParams } from 'react-router-dom'
 function CardDetails() {
    const params=useParams()
    console.log(params)
  return (
    <div className='mt-[50px]'>
      {params.id}
    </div>
  )
}
export default CardDetails