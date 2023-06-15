import React, { useState, useEffect } from 'react';

const App = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    // Fetch train schedule data from an API or any other data source
    // Replace the URL with your API endpoint
    fetch('https://example.com/api/train-schedule')
      .then(response => response.json())
      .then(data => setTrains(data));
  }, []);

  return (
    <div>
      <h1>Train Schedule</h1>
      <table>
        <thead>
          <tr>
            <th>Train Number</th>
            <th>Departure</th>
            <th>Arrival</th>
          </tr>
        </thead>
        <tbody>
          {trains.map(train => (
            <tr key={train.id}>
              <td>{train.number}</td>
              <td>{train.departureTime}</td>
              <td>{train.arrivalTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
