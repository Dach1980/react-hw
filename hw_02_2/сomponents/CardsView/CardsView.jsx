import React from 'react';
import './CardsView.css';
import ShopCard from './ShopCard/ShopCard.jsx';

export default function CardsView({ cards }) {
  return (
    <ul className={'CardsView'}>
      {cards.map((card) => (
        <ShopCard key={card.id} card={card.data} />
      ))}
    </ul>
  );
}