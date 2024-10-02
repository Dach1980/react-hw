import React from 'react';
import './ListView.css';
import ShopItem from './ShopItem/ShopItem.jsx';

export default function ListView({ items }) {
  return (
    <ul className={'ListView'}>
      {items.map((item) => (
        <ShopItem key={item.id} item={item.data} />
      ))}
    </ul>
  );
}