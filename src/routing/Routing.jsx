import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Cart } from '../components/Cart'
import { Home } from '../components/Home'
import { Orders } from '../components/Orders'
import { Products } from '../components/Products'

export const Routing = () => {
  return (
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
    </Routes>
  )
}

