import React from 'react'
import { Link, useLocation } from 'react-router-dom';
function Toolbar() {
  const location = useLocation()
  const nav_items = [
    { title: "Home", path: '/' },
    { title: "About", path: '/about' },
    { title: "Contact", path: '/##' },
    { title: "Blog", path: '/##' },
    { title: "Event", path: '/##' },

  ]

  return (

    <div className='flex rounded-2xl riun justify-between px-10 py-4  fixed top-10 w-12/13 z-50  left-0 right-0 mx-auto shadow-2xl bg-blue-500  '>
      <div className='front-bold text-2xl text-white  '>Training</div>
      <div className='flex gap-6'></div>
      {
        nav_items.map((val, i) => {
          return(
          <div className='relative flex items-center justify-center'>
            <Link key={i} to={val.path} className={`capitalize ${location.pathname == val.path ? "text-red-600" : "text-white"}`}>{val.title}</Link>
            <div className={`h-1 bg-white ${location.pathname == val.path ? "w-full" : "w-0"} transition-all duration-700 delay-75 ease-in-out`}></div>
          </div>
)

        })
      }
    </div>
    

    
      
  )
}

export default Toolbar
