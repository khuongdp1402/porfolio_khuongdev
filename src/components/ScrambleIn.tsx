import React, { useState, useEffect, useRef } from 'react';

interface ScrambleInProps {
  text: string;
  delay?: number;
  triggered: boolean;
  className?: string;
}

const CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~|}{[]:;?><";

export const ScrambleIn: React.FC<ScrambleInProps> = ({
  text,
  delay = 0,
  triggered,
  className = '',
}) => {
  const [displayText, setDisplayText] = useState<string>('');
  const [hasStarted, setHasStarted] = useState(false);
  const frameRef = useRef<number>(0);
  const intervalRef = useRef<any>(null);

  useEffect(() => {
    if (!triggered) {
      setDisplayText('');
      setHasStarted(false);
      return;
    }

    const timeoutId = setTimeout(() => {
      setHasStarted(true);
      frameRef.current = 0;

      intervalRef.current = setInterval(() => {
        frameRef.current += 1;
        const cursor = frameRef.current * 0.5;

        if (cursor >= text.length) {
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

          if (i < cursor) {
            result += char;
          } else if (i < cursor + 3) {
            const randomChar = CHARSET[Math.floor(Math.random() * CHARSET.length)];
            result += randomChar;
          } else {
            break;
          }
        }

        setDisplayText(result);
      }, 25);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [triggered, text, delay]);

  if (!hasStarted) {
    return <span className={className}>&nbsp;</span>;
  }

  return <span className={className}>{displayText || '\u00A0'}</span>;
};
