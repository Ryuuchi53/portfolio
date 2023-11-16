import React, { useState, useEffect } from 'react';
import "./App.css";

const TypingAnimation = ({ message = 'Get Started', speed = 100 }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDisplayText((prevText) => {
        if (prevText.length < message.length) {
          return prevText + message[prevText.length];
        } else {
          clearInterval(intervalId);
          return prevText;
        }
      });
    }, speed);

    return () => clearInterval(intervalId);
  }, [message, speed]);

  return <h1>{displayText}</h1>;
};

export default TypingAnimation;