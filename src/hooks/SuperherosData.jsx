import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SuperherosData() {
  const [data, setData] = useState(null);

    // useEffect(() => {
    //   fetch(`https://akabab.github.io/superhero-api/api/all.json`)
    //     .then(response => response.json())
    //     .then(data => setData(data))
    //     .catch(error => console.error('Error fetching data:', error));
    // }, []);

    useEffect(() => {
      axios.get(`https://dummyjson.com/carts`)
        .then(response => setData(response.data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
      <div>
        {data ? (
          <div>
          {console.log(data.carts[0])}
          {data.carts.map((cart, index)=>(
            <div key={index} style={{padding:"5px",display:"flex",flexDirection:"column",gap:"15px"}}>
              <div style={{border:"2px solid gray",padding:"2%",margin:"20px"}}>
              <p style={{color:"cyan"}}>{cart.id}</p>
              {cart.products.map((product, index)=>(
                <div key="index" style={{display:"flex",alignItems:"center",justifyContent:"space-around",gap:"10px",border:"1px solid white"}}>
                  <p>{product.id}</p>
                  <p>{product.title}</p>
                  <p>{product.price}</p>
                  <p>{product.quantity}</p>
                  <p>{product.total}</p>
                  <p>{product.discountpercentage}</p>
                  <p>{product.discountedTotal}</p>
                  <img style={{height:"100px",width:"100px",borderRadius:"50%"}} src={product.thumbnail} />
                </div>
              ))}
              </div>
            </div>
          )
          )}
          </div>
          ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }

export default SuperherosData;