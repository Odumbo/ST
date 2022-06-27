import React, { Component } from "react";
import  ReactDOM  from 'react-dom/client';
import NavBar from "./NavBar";
import Dashboard from "./Dashboard";
import Login from "./Login";
import ShoppingCart from "./ShoppingCart";
import CustomersList from "./CustomersList";
import Logout from "./Logout";
//import { Route, Routes } from "react-router";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoMatchPage from "./NoMatchPage";


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <div className="container-fluid">
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/Dashboard" element={<Dashboard/>} />
            <Route path="/CustomersList" element={<CustomersList/>} />
            <Route path="/ShoppingCart" element={<ShoppingCart/>} />
            <Route path="/Logout" element={<Logout/>} />
            <Route path="*" component={NoMatchPage} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
