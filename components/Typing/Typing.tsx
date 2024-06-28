import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import styled from 'styled-components';

const GradientText = styled.span`
  background: linear-gradient(to right, #ff7e5f, #feb47b);
  -webkit-background-clip: text;
  color: transparent;
`;

interface TypingProps {
  words: string[];
}

const Typing: React.FC<TypingProps> = ({ words }) => {
  const el = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const options = {
      strings: words,
      typeSpeed: 65,
      backSpeed: 65,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    };

    const typed = new Typed(el.current!, options);

    return () => {
      typed.destroy();
    };
  }, [words]);

  return <GradientText ref={el} />;
};

export default Typing;
