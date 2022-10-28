import React from 'react'
import { Link } from 'react-router-dom'
import { Flex, Stack, Text, useMediaQuery } from "@chakra-ui/react";

export const Navbar = () => {
  const [isNotSmallScreen] = useMediaQuery("(min-width:600px)");
  return (
    <Flex direction={isNotSmallScreen ? "row" : "column"} height="50px" width="100%" gap="40px" justifyContent="center" alignItems="center" borderBottom="2px solid gray">
    <Link to="/home">Home</Link>
    <Link to="/products">Products</Link>
    <Link to="/cart">Cart</Link>
    <Link to="/orders">Orders</Link>
    </Flex>
  )
}

