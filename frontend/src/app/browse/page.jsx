'use client';
import React, { useEffect, useState } from 'react'

const Browse = () => {

  // const { id } = useParams();



  const [browseproduct, setbrowseproduct] = useState(null);


  const fetchProducts = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/getall`);
    console.log(res.status);
    const data = await res.json();

    console.log(data);

  }

  useEffect(() => {
    fetchProducts();
  }, []);


  const showDetails = async () => {
    return (

    )
  }

  return (
    <div>
      
    </div>
  )
}

export default Browse;