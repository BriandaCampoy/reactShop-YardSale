import React, { useState, useContext } from 'react';
import '@styles/Header.scss';
import Menu from '@components/Menu';
import icon_menu from '@icons/icon_menu.svg';
import logo_main from '@logos/logo_yard_sale.svg';
import AppContext from '@context/AppContext';
import icon_shopping_cart from '@icons/icon_shopping_cart.svg';
import MyOrder from '@containers/MyOrder'

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const {state} = useContext(AppContext)
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const handleToggleOrders =()=>{
    setToggleOrders(!toggleOrders);
  }
  return (
    <nav>
      <img src={icon_menu} alt="menu" className="menu" />
      <div className="navbar-left">
        <img src={logo_main} alt="logo" className="nav-logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            Example@gmail.com
          </li>
          <li className="navbar-shopping-cart" onClick={handleToggleOrders}>
            <img src={icon_shopping_cart} alt="shopping cart" />
            {state.cart.length>0 &&
            <div>{state.cart.length>9?'+9':state.cart.length }</div>
            }
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder />}
    </nav>
  );
};

export default Header;
