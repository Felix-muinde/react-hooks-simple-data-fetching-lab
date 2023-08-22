// create your App component here
import React, { useState, useEffect } from 'react';

function App() {
  const [dogImage, setDogImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch a random dog image from the API
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the dog image URL
        setDogImage(data.message);
        // Set isLoading to false since data has been loaded
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false); // Set isLoading to false in case of an error
      });
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div className="App">
      <h1>Random Dog Image</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;
