import React, { useState, useEffect, useRef } from "react";
import { Animate } from "react-move";

const AnimatedProgressProvider = ({
  valueStart,
  valueEnd,
  duration,
  easingFunction,
  repeat,
  children
}) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const durationRef = useRef(duration);
  const repeatRef = useRef(repeat);

  useEffect(() => {
    let interval = undefined;
    if (repeatRef.current) {
      interval = window.setInterval(() => {
        setIsAnimated((prevIsAnimated) => !prevIsAnimated);
      }, durationRef.current * 1000);
    } else {
      setIsAnimated(true);
    }
    return () => window.clearInterval(interval);
  }, []);

  return (
    <Animate
      start={() => ({
        value: valueStart,
      })}
      update={() => ({
        value: [isAnimated ? valueEnd : valueStart],
        timing: {
          duration: durationRef.current * 1000,
          ease: easingFunction,
        },
      })}
    >
      {({ value }) => children(value)}
    </Animate>
  );
};

AnimatedProgressProvider.defaultProps = {
  valueStart: 0,
};

export default AnimatedProgressProvider;
