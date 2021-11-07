import "./Card.css";
import React, { useState, useEffect } from "react";
import Writers from "../Writers/Writers";

const Card = () => {
  const [persons, setPerson] = useState([]);

  useEffect(() => {
    fetch("./tools.JSON")
      .then((res) => res.json())
      .then((data) => {
        setPerson(data);
      });
  }, []);
  console.log("p", persons);
  return (
    <div>
      <h2>Total Number is {persons.length} </h2>

      {persons.length && persons.map((person) => <Writers person={person} />)}
    </div>
  );
};

export default Card;
