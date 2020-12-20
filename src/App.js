import React, { useState } from "react";
import "./styles.css";

var animalDictonary = {
  "🙈": "See-No-Evil Monkey",
  "🙉": "Hear-No-Evil Monkey",
  "🙊": "Speak-No-Evil Monkey",
  "🦍": "Gorilla",
  "🦝": "Raccoon",
  "🦄": "Unicorn",
  "🐗": "Boar",
  "🦒": "Giraffe",
  "🦏": "Rhinoceros"
};

var animalsWeKnow = Object.keys(animalDictonary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function animalInputHandler(event) {
    var userInput = event.target.value;
    var meaning = animalDictonary[userInput];
    if (meaning === undefined) {
      meaning = "We don't have this animal-emoji in our database";
    }
    setMeaning(meaning);
  }
  function animalClickHandler(animal) {
    var meaning = animalDictonary[animal];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1 style={{ padding: "2rem" }}>Animal Dictonary</h1>
      <input onChange={animalInputHandler} />
      <h2> {meaning}</h2>
      <h3 style={{ padding: "3rem" }}> Select the animals below 👇</h3>
      {animalsWeKnow.map(function (animal) {
        return (
          <span
            onClick={() => animalClickHandler(animal)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={animal}
          >
            {animal}{" "}
          </span>
        );
      })}
    </div>
  );
}
