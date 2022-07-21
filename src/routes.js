import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Peges/home/Home'
import NewProduct from './Peges/newProduct/NewProduct'
import NewUser from './Peges/newUser/NewUser'
import Product from './Peges/product/Product'
import ProductList from './Peges/productList/ProductList'
import User from './Peges/user/User'
import UserList from './Peges/userList/UserList'

export default function MainaRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/UserList" element={<UserList />} />
      <Route path="/User/:userId" element={<User />} />
      <Route path="/newUser" element={<NewUser />} />
      <Route path="/product" element={<ProductList />} />
      <Route path="/product/:productIdt" element={<Product />} />
      <Route path="/newproduct" element={<NewProduct />} />
    </Routes>
  )
}
