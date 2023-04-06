import React from 'react';
import './Updates.css';
import { UpdatesData } from '../../Datas/Datas';

export default function Updates() {
  return (
    <div className="updates">
      {UpdatesData.map((update, index) => {
        return (
          <div className="update" key={index}>
            <img src={update.img} alt="Customer img" />
            <div className="noti">
              <div style={{ marginBottom: '0.5rem' }}>
                <span>{update.name}</span>
                <span> {update.noti}</span>
              </div>
              <span>{update.time}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
