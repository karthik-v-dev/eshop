import React from "react";
import Layout from "./components/layout";
import Header from "./components/header";
import LoginP from './components/login';
import Cartpage from './components/cartPage';
import './index.css';
import { connect } from 'react-redux';

function App(props) {
  console.log(props.count.login)
  const Login = props.count.login;
  console.log(props.count.login)
  const Cart= props.count.cart;
  return (
    <div>
      {Login &&<LoginP/>}
      {!Login&&<Header/>}
      {!Cart&&!Login&&<Layout/>}
      {Cart&&<Cartpage/>}
    </div>
  );
}
export default connect(state=>state)(App);

