import React, { useState } from 'react'
import AccordianItem from './AccordianItem'

const data=[
    {
        title:"title1",
        body:"this is the first accordaian"
    },
    {
        title:"title2",
        body:"this is the first accordaian"
    },
    {
        title:"title3",
        body:"this is the first accordaian"
    }
]

const Accordian = () => {
    const [openIndex,setOpenIndex]=useState(0)
  return (
    <div className='w-[50%] m-auto mt-5'>
    {
        data.map((item,index)=>(
            <AccordianItem key={index} setIsOpen={()=>{
                //second should open rest should close 
                if(index === openIndex){
                    setOpenIndex(null);
                }else{
                    setOpenIndex(index);
                }
                
             }} isOpen={index === openIndex ? true : false} title={item.title} body={item.body}/>
        ))
    
    }
   
    </div>
  )
}

export default Accordian