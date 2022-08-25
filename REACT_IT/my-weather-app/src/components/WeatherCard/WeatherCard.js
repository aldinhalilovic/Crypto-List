import React, { useState } from "react";
import WeatherAlarm from "../WeatherAlarm/WeatherAlarm";
import "./WeatherCard.css";

const WeatherCard = function () {
  const [degree, setDegree] = useState(0);

  function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <div>
      <div className="weather-container">
        <h1 className="degree">{degree}</h1>
        <button
          className="change-degree"
          onClick={() => setDegree(randomNum(-20, 40))}
        >
          {" "}
          Change Degree
        </button>
      </div>
      <div>
        <WeatherAlarm degree={degree} />
      </div>
    </div>
  );
};

export default WeatherCard;
