import React from "react";
import { createContext } from "react";
import { useState } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import "./Grandpa.css";


/* 
// context api
1. call createContext with a default value
02. set a variable of the context with uppercase
03. make sure you export the context to use it in other places 
04. wrap you child content using RingContext.Provider
05. Provide a value 
06. to consume the context from child Component 
07. useContext hook and you will you need to pass the context 
08. make sure you take notes...
 */

 

export const RingContext = createContext("ring");

const Grandpa = () => {
  const [house, setHouse] = useState(1);

  const ornament = "Diamond Ring";
  const handleBuyAHouse = () => {
    const newHouseCount = house + 1;
    setHouse(newHouseCount);
  };
  return (
    <RingContext.Provider value={[house, setHouse]}>
      <div className="grandpa">
        <h2>Grandpa</h2>

        <p>
          House: {house} <button onClick={handleBuyAHouse}>Buy A House</button>
        </p>

        <section style={{ display: "flex" }}>
          <Father house={house} ornament={ornament}></Father>
          <Aunty house={house}></Aunty>
          <Uncle house={house}></Uncle>
        </section>
      </div>
    </RingContext.Provider>
  );
};

export default Grandpa;
