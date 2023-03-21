import React from 'react';

export default function CardsStr(props) {
  const Png = props.param.png;
  return (
    <div className="CompactCards">
      <div className="radialBar">Chart</div>
      <div className="detail">
        <Png />
        <span>${props.param.value}</span>
        <span>Last 24 hours</span>
      </div>
    </div>
  );
}
