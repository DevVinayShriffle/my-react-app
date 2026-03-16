function Car({name, color, brand, cars}) {
  color = "Yellow"
  console.log(cars)
  return (
    <>
    <h1>Car Details</h1>
    <h1>Name: {name}</h1>
    <h1>Color: {color}</h1>
    {brand && <h1>Brand: {brand}</h1>}

    <ul>

      {cars.map((car, index)=><li key={index}>{car}</li>)}

    </ul>
    </>
    )
}

export default Car;