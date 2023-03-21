import React, { useState } from 'react';
import { LayoutGroup, motion } from 'framer-motion';

export default function Cards(props) {
  const [expand, setExpand] = useState(false);
  return <div>{expand ? 'Expanded' : 'Compact'}</div>;
}
