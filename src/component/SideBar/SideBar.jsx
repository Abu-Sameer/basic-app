import React, { useState } from 'react';
import './SideBar.css';
import { SidebarData } from '../../Datas/Datas';
import { UilSignOutAlt, UilBars } from '@iconscout/react-unicons';
import { motion } from 'framer-motion';

export default function SideBar() {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const sideBarVariants = {
    true: {
      left: '0',
    },
    false: {
      left: '-60%',
    },
  };

  return (
    <>
      <motion.div
        className="bars"
        onClick={() => setExpanded(!expanded)}
        style={expanded ? { left: '60%' } : { left: '5%' }}
      >
        <UilBars />
      </motion.div>
      <motion.div
        className="sidebar"
        variants={sideBarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ''}
      >
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
      </motion.div>
    </>
  );
}
