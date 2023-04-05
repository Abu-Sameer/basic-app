import React, { useState } from 'react';
import './SideBar.css';
import { SidebarData } from '../../Datas/Datas';
import { UilSignOutAlt } from '@iconscout/react-unicons';

export default function SideBar() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="sidebar">
      <div className="logo">
        <i className="fa-solid fa-shop"></i>
        <span>
          Sh<span>o</span>ps
        </span>
      </div>
      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div
              className={selected === index ? 'menuItem active' : 'menuItem'}
              key={index}
              onClick={() => setSelected(index)}
            >
              <item.icon />
              <span>{item.heading}</span>
            </div>
          );
        })}
        <div className="menuItem">
          <UilSignOutAlt />
        </div>
      </div>
    </div>
  );
}
