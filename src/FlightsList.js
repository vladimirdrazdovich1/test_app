import React from "react";
import PropTypes from 'prop-types';
import { getCityFromTimezone } from './helpers';
import styles from './style.module.css';

function FlightsList(props) {
  const { flights } = props;

  return (
    <div>
      {flights.map((flight, index) => (
        <div key={flight.flight.number} className={styles.flightItem}>
          {index + 1} Flight from {getCityFromTimezone(flight.arrival.timezone)} to {getCityFromTimezone(flight.departure.timezone)}, {flight.flight_status} for {flight.flight_date}
        </div>
      ))}
    </div>
  );
}

FlightsList.propTypes = {
  flights: PropTypes.arrayOf(PropTypes.shape({})),
};

export default FlightsList;