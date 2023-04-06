import React, { useState } from 'react';
import './Card.css';
import { motion } from 'framer-motion';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { UilTimes } from '@iconscout/react-unicons';
import Chart from 'react-apexcharts';

export default function Card(props) {
  const [expand, setExpand] = useState(false);
  return (
    <div>
      {expand ? (
        <ExpandedCard param={props} setExpand={() => setExpand(false)} />
      ) : (
        <CompactCard param={props} setExpand={() => setExpand(true)} />
      )}
    </div>
  );

  //CompactCard

  function CompactCard({ param, setExpand }) {
    const Png = param.png;
    return (
      <motion.div
        className="compactCard"
        style={{
          background: param.color.backGround,
          boxShadow: param.color.boxShadow,
        }}
        onClick={setExpand}
        animate={{
          y: 0,
          opacity: 1,
        }}
        initial={{
          opacity: 0,
          y: 50,
        }}
        transition={{
          type: 'spring',
          stiffness: 30,
        }}
      >
        <div className="radialBar">
          <CircularProgressbar
            value={param.barValue}
            text={`${param.barValue}%`}
          />
          <span>{param.title}</span>
        </div>
        <div className="details">
          <Png />
          <span>${param.value}</span>
          <span>Last 24 hours</span>
        </div>
      </motion.div>
    );
  }

  //ExpandedCard

  function ExpandedCard({ param, setExpand }) {
    const data = {
      options: {
        chart: {
          type: 'area',
          height: 'auto',
        },
        dropShadow: {
          enabled: false,
          enabledOnSeries: undefined,
          top: 0,
          left: 0,
          blur: 3,
          color: '#000',
          opacity: 0.35,
        },

        fill: {
          colors: ['#fff'],
          type: 'gradient',
        },
        dataLabels: {
          enabled: false,
        },

        stroke: {
          curve: 'smooth',
          colors: ['white'],
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm',
          },
        },

        grid: {
          show: true,
        },
        xaxis: {
          type: 'datetime',
          categories: [
            '2018-09-19T00:00:00.000Z',
            '2018-09-19T01:30:00.000Z',
            '2018-09-19T02:30:00.000Z',
            '2018-09-19T03:30:00.000Z',
            '2018-09-19T04:30:00.000Z',
            '2018-09-19T05:30:00.000Z',
            '2018-09-19T06:30:00.000Z',
          ],
        },
      },
    };

    return (
      <motion.div
        className="ExpandedCard"
        style={{
          background: param.color.backGround,
          boxShadow: param.color.boxShadow,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        initial={{
          y: -60,
          opacity: 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 30,
        }}
      >
        <div
          style={{
            alignSelf: 'flex-end',
            cursor: 'pointer',
            color: 'white',
          }}
        >
          <UilTimes onClick={setExpand} />
        </div>
        <span>{param.title}</span>
        <div className="chartContainer">
          <Chart series={param.series} type="area" options={data.options} />
        </div>
        <span>Last 24 hours</span>
      </motion.div>
    );
  }
}
