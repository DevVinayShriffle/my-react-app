import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SuperherosData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://akabab.github.io/superhero-api/api/all.json`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
    }, []);

  useEffect(() => {
    axios.get(`https://dummyjson.com/carts`)
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

    return (
      <div>
        {data ? (
          <div>
          {console.log(data)}
          </div>
          ) : (
          <p>Loading...</p>
          )}
        </div>
        );
  }

  export default SuperherosData;