import React, { useState, useEffect } from "react";
import { FLIGHT_MAX_RANGE, FLIGHT_MIN_RANGE } from './constants';
import FlightsList from './FlightsList';
import styles from './style.module.css';

function App() {
  const [flights, setFlights] = useState([]);
  const [rangedFlights, setRangedFlights] = useState([]);

  useEffect(() => {
    fetch(`http://api.aviationstack.com/v1/flights?access_key=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(data => {
        const filteredFlights = data.data.filter(flight => flight.flight_status === 'scheduled');
        const scheduledFlights = filteredFlights.slice(0, FLIGHT_MAX_RANGE);
        setFlights(scheduledFlights);
        setRangedFlights(scheduledFlights);
      })
      .catch(err => console.log(err));
  }, []);

  const handleChangeRange = (e) => {
    const rangedFlights = flights.slice(0, e.target.value);
    setRangedFlights(rangedFlights);
  };
  return (
    <div>
      <div className={styles.mainScreen}>
        <div>graph</div>
        <FlightsList flights={rangedFlights} />
      </div>
      <div className={styles.slidecontainer}>
        <input
          type="range"
          min={`${FLIGHT_MIN_RANGE}`}
          max={`${FLIGHT_MAX_RANGE}`}
          className={styles.slider}
          onChange={handleChangeRange}
        />
        <p>Flight numbers are: {rangedFlights.length}</p>
      </div>
    </div>
  );
};

export default App;