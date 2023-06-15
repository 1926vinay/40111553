const trains = [
    {
      trainNumber: '123',
      departure: 'City A',
      destination: 'City B',
      departureTime: '10:00 AM',
      arrivalTime: '12:00 PM'
    },
    {
      trainNumber: '456',
      departure: 'City C',
      destination: 'City D',
      departureTime: '02:00 PM',
      arrivalTime: '04:00 PM'
    }
    // Add more train objects here as needed
  ];
  
  export function getTrains() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(trains);
      }, 1000); // Simulate delay for API request
    });
  }