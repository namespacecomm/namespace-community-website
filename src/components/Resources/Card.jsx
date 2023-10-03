import React from 'react'
import { Link } from 'react-router-dom'

export const Card = (props) => {
  return (
    <div className='flex lg:flex-row items-center p-4 border-2 border-white rounded-lg gap-4 xs:flex-col xs:items-center  '>
        <div className='w-1/2 xs:w-full '>
            <img src={props.image} className='h-[300px] w-[300px] object-contain mx-auto' alt="" />

        </div>
        <div className='w-1/2 flex flex-col items-center lg:items-start p-2 rounded-xl gap-4 xs:w-full'>
            <span className='text-4xl font-bold text-blue-600'>{props.name}</span>
            <span className='lg:text-left'>{props.description}</span>
            <div className='flex flex-col lg:items-start gap-4  rounded-lg w-full xs:items-center '>
                <span className='text-3xl font-bold text-blue-600'>Beginner Resources</span>
                <ul className='flex flex-col lg:items-start xs:items-center '>
                    {props.resources.map((ele,ind)=>{
                        return <li key={ind} className='underline text-xl hover:text-blue-500 duration-500' ><Link to={ele.url}>{ele.title}</Link></li>
                    })}
                </ul>
            </div>
        </div>
    </div>

  )
}