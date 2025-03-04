import React from 'react';
import { DateTimeProps } from '../types';

const DateTime: React.FC<DateTimeProps> = ({ date }) => {
  return <p className="date">{date}</p>;
};

export default DateTime;
