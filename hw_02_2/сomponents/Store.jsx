import React, { useState } from 'react';
import './Store.css';
import { products } from '../src/data/products.jsx';
import IconSwitch from "./IconSwitch/IconSwitch.jsx";
import CardsView from './CardsView/CardsView.jsx';
import ListView from './ListView/ListView.jsx';

export default function Store() {
  const [viewState, setView] = useState(false);

  const switchView = () => {
    setView(!viewState);
  };

  const productsID = products.map((product) => ({
    data: product,
    id: Math.random(),
  }));

  return (
    <div>
      <IconSwitch
        icon={viewState ? 'view_module' : 'view_list'}
        onSwitch={switchView}
      />
      {viewState ? (
        <CardsView cards={productsID} />
      ) : (
        <ListView items={productsID} />
      )}
    </div>
  );
}