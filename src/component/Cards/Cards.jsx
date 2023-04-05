import React from 'react';
import { CardsData } from '../../Datas/Datas';
import './Cards.css';
import Card from '../Card/Card';

export default function Cards() {
  return (
    <div className="cardMain">
      {CardsData.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
  );
}
