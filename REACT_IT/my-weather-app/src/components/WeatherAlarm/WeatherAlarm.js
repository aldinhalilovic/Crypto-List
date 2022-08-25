import React, { useState } from "react";
import "./WeatherAlarm.css";

const WeatherAlarm = function (degree) {
  return (
    <div>
      <h1
        className={`weatherAlarm ${degree > 20 ? "weatherAlarmNone" : ""}`}
      ></h1>
    </div>
  );
};

export default WeatherAlarm;
