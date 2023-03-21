import React from 'react';
import { CardsData } from '../../Datas/Datas';
import Cards from '../Cards/Cards';
import './Card.css';

export default function Card() {
  return (
    <div className="cardMAin">
      {CardsData.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <Cards
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
