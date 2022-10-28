import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { getApiData } from '../redux/actions';
import { Flex, Stack, useMediaQuery, Text, Button } from "@chakra-ui/react";

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
  const [isNotSmallScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Flex direction={isNotSmallScreen ? "row" : "column"} width="100%" gap="40px" justifyContent="center" alignItems="center" marginTop="20px">
      {data && data?.map((item) => (
        <div>
          <Link to={`/productitem/${item.id}`}>
            <Stack onClick={() => handleProduct(item.id)} w="270px" h="450px"  border="3px solid black" display="flex" justifyContent="center" alignItems="center">
          <Text fontSize="medium" fontWeight="bold">BRAND: {item.brand}</Text>
          <Text fontSize="medium" fontWeight="bold">TITLE: {item.title}</Text>
          <div><img src={item.image} w="150px" h="150px" alt="/" /></div>
          <Text fontSize="medium" fontWeight="bold">CATEGORY: {item.category}</Text>
          </Stack>
          </Link>
          </div>
      ))}
    </Flex>
  )
}

