import React, { useState } from 'react';

export default function CardsStr() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div
      layout
      style={{ height: isOpen ? '100px' : '500px' }}
      onClick={() => setOpen(!isOpen)}
    />
  );
}
