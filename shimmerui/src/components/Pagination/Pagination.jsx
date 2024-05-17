import React, { useEffect, useState } from 'react'
const limit =10;
const Pagination = () => {
    const [currentPage,setCurrentPage]=useState(0);
    useEffect(()=>{
        fetchProducts();
    },[])
    const fetchProducts =async ()=>{
        
        const data= await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${currentPage * limit}&select=title,price,description`);
        const json= await data.json();
        console.log(json)
    }
  return (
    <div>Pagination</div>
  )
}

export default Pagination