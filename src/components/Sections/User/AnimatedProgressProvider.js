import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    let interval = undefined;
    if (repeat) {
      interval = window.setInterval(() => {
        setIsAnimated(prevIsAnimated => !prevIsAnimated);
      }, duration * 1000);
    } else {
      setIsAnimated(true);
    }
    return () => window.clearInterval(interval);
  }, []);

  return (
    <Animate
      start={() => ({
        value: valueStart
      })}
      update={() => ({
        value: [isAnimated ? valueEnd : valueStart],
        timing: {
          duration: duration * 1000,
          ease: easingFunction
        }
      })}
    >
      {({ value }) => children(value)}
    </Animate>
  );
};

AnimatedProgressProvider.defaultProps = {
  valueStart: 0
};

export default AnimatedProgressProvider;