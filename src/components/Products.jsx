import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { getApiData } from '../redux/actions';

export const Products = () => {
  const {data} = useSelector(state => state.data)
  console.log(data, "masai");

  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getApiData())
  }, [dispatch])

  const handleProduct = (id) => {
    console.log(id, "harishID")
  }

  return (
    <>
    <div>
      {data && data?.map((item) => (
        <div>
          <Link to={`/productitem/${item.id}`}>
            <div onClick={() => handleProduct(item.id)} style={{border:"2px solid blue"}}>
          <div>{item.brand}</div>
          <div>{item.title}</div>
          <div><img src={item.image} alt="/" /></div>
          <div>{item.category}</div>
          </div>
          </Link>
          </div>
      ))}
    </div>
    </>
  )
}

