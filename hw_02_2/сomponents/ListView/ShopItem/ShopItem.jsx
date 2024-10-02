import React from 'react';
import './ShopItem.css';
import AddCartButton from '../../AddCartButton/AddCartButton.jsx';

export default function ShopItem({ item }) {
  const { name, price, color, img } = item;
  return (
    <li className={'ShopItem'}>
      <img src={img} alt={name} className={'ShopItem__img'} />
      <h2 className={'ShopItem__title'}>{name}</h2>
      <h3 className={'ShopItem_subtitle'}>{color}</h3>
      <span className={'ShopItem_price'}>${price}</span>
      <AddCartButton />
    </li>
  );
}