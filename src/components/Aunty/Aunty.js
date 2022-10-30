import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';


const Aunty = () => {
  const [house, setHouse] = useContext(RingContext);
  const handleHouseIncrease = () =>{
    const newHouseCount = house + 1;
    setHouse(newHouseCount)
  }
    return (
        <div>
          <h2>Aunty</h2>
          <p>House: {house}</p>
          <button onClick={handleHouseIncrease}>Buy a house</button>
        </div>
    );
};

export default Aunty;