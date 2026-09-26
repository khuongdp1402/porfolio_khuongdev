import React, { useState, useEffect, useRef } from 'react';

interface ScrambleTextProps {
  text: string;
  isHovered: boolean;
  className?: string;
}

const CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~|}{[]:;?><";

export const ScrambleText: React.FC<ScrambleTextProps> = ({
  text,
  isHovered,
  className = '',
}) => {
  const [displayText, setDisplayText] = useState<string>(text);
  const frameRef = useRef<number>(0);
  const intervalRef = useRef<any>(null);

  useEffect(() => {
    if (!isHovered) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      setDisplayText(text);
      frameRef.current = 0;
      return;
    }

    frameRef.current = 0;
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      frameRef.current += 1;
      const revealIndex = Math.floor(frameRef.current / 4);

      if (revealIndex >= text.length) {
        setDisplayText(text);
        clearInterval(intervalRef.current);
        return;
      }

      let result = '';
      for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (char === ' ') {
          result += ' ';
          continue;
        }

        if (i < revealIndex) {
          result += char;
        } else {
          result += CHARSET[Math.floor(Math.random() * CHARSET.length)];
        }
      }

      setDisplayText(result);
    }, 25);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered, text]);

  return <span className={className}>{displayText}</span>;
};
