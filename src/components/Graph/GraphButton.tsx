import React, { CSSProperties } from 'react';

interface buttonProps {
  text: string;
  styles: any;
  func: any;
}

const GraphButton: React.FC<buttonProps> = ({ text, styles, func }) => {
  const randID = Math.random() * 1000000;
  const r = randID + '';

  function mouseover() {
    const c = document.getElementById(r);
    if (c === null) {
      return null;
    }
    c.style.backgroundColor = '#07c';
  }

  function mouseout() {
    const c = document.getElementById(r);
    if (c === null) {
      return null;
    }
    c.style.backgroundColor = '#0095ff';
  }

  return (
    <>
      <button
        id={r}
        style={styles}
        onMouseEnter={() => mouseover()}
        onMouseLeave={() => mouseout()}
        onClick={func}
      >
        {text}
      </button>
    </>
  );
};

export default GraphButton;
