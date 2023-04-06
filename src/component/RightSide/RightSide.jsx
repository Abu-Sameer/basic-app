import React from 'react';
import './RightSide.css';
import Updates from '../Updatex/Updates';
import CunstomerReview from '../CunstomerReview/CunstomerReview';

export default function RightSide() {
  return (
    <div className="rightSide">
      <div>
        <h3>Updates</h3>
        <Updates />
      </div>
      <div>
        <h3>Customer Review</h3>
        <CunstomerReview />
      </div>
    </div>
  );
}
