import React, { useEffect, useState } from "react";

export default function Timer({ time, setCurrentTime }) {
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  useEffect(() => {
    setMinutes(() => {
      return `0${Math.floor((time / 60000) % 60)
        .toString()
        .slice(-2)}`;
    });
  }, [time]);

  useEffect(() => {
    setSeconds(() => {
      return `0${Math.floor((time / 1000) % 60)
        .toString()
        .slice(-2)}`;
    });
  }, [time]);

  useEffect(() => {
    setCurrentTime([minutes, seconds]);
  }, [time]);

  return (
    <div className="timer">
      <span className="digits">
        {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
      </span>
      <span className="digits">
        {("0" + Math.floor((time / 1000) % 60)).slice(-2)}.
      </span>
      <span className="digits mili-sec">
        {("0" + ((time / 10) % 100)).slice(-2)}
      </span>
    </div>
  );
}
