import React from 'react';
import { changeActivePage } from '../redux/Slices/pageSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const activePage = useSelector((state) => state.page.page);
  const dispatch = useDispatch();
  return (
    <header class="container flex">
      <div class="title">
        <a class="title flex gap color-white bold font-size-22">
          <img src="https://spworlds.ru/img/logo.svg" />
          medusa
        </a>
      </div>
      <div>
        <Link
          to="/"
          class={
            +activePage === 0
              ? 'hover-underline-animation margin-sides active'
              : 'hover-underline-animation margin-sides'
          }
          onClick={() => dispatch(changeActivePage(0))}>
          <a>Главная</a>
        </Link>
        <Link
          to="/buy"
          style={{ textDecoration: 'none' }}
          class={
            +activePage === 1
              ? 'hover-underline-animation margin-sides active'
              : 'hover-underline-animation margin-sides'
          }
          onClick={() => dispatch(changeActivePage(1))}>
          Купить
        </Link>
        <Link
          to="/sell"
          style={{ textDecoration: 'none' }}
          class={
            +activePage === 2
              ? 'hover-underline-animation margin-sides active'
              : 'hover-underline-animation margin-sides'
          }
          onClick={() => dispatch(changeActivePage(2))}>
          Продать
        </Link>
      </div>
      <a class="btn bg-primary">Корзина</a>
    </header>
  );
};

export default Header;
