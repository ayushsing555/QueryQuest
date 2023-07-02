import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import TimeMe from 'timeme';

const TimeTracker = ({id}) => {
  const location = useLocation();
  const exactPathName = `/query/${id}`;
  console.log(exactPathName)
  const [timeSpent, setTimeSpent] = useState(0);

  useEffect(() => {
    const currentPageName = exactPathName;
    if (location.pathname===exactPathName) {
      TimeMe.initialize({ exactPathName });
      TimeMe.startTimer(exactPathName);
    } else {
      TimeMe.stopTimer(exactPathName);
    }
    return () => {
      TimeMe.stopTimer(exactPathName);
    };
  }, [location.pathname]);
  useEffect(() => {
    const interval = setInterval(() => {
      const time = TimeMe.getTimeOnCurrentPageInSeconds();
      setTimeSpent(time);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Time Spent: {timeSpent.toFixed(2)} seconds</h2>
    </div>
  );
};

export default TimeTracker;
