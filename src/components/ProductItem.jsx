import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import axios from "axios";
import { useState, useEffect } from 'react';

export const ProductItem = () => {
    const {id} = useParams();
    console.log(id, "locHari")

    const [product, setProduct] = useState({});
 
    // const data = axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${id}`)
    // console.log(data, "hariData")

    useEffect(() => {
        const getProduct = async (id) => {
          try {
            const res = await axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${id}`);
            setProduct(res.data);
          } catch {}
        };
        getProduct();
      }, []);

  return (
    <div>
        {product.map((item) => (
            <div>
                <div>{item.brand}</div>
                </div>
        ))}
    </div>
  )
}

