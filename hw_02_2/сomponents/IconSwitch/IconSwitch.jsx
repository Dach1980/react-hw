import React from 'react';
import './IconSwitch.css';

export default function IconSwitch({ icon, onSwitch }) {
  return (
    <div className={'icon-holder'}>
      <span className={'material-icons'} onClick={onSwitch}>
        {icon}
      </span>
    </div>
  );
}