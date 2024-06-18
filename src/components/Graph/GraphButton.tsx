import React, { CSSProperties } from 'react';

interface buttonProps {
  text: string;
  styles: CSSProperties;
  func: () => any;
}

const GraphButton: React.FC<buttonProps> = ({ text, styles, func }) => {
  const randID = Math.random() * 1000000;
  const r = randID + '';
  return (
    <>
      <button
        id={r}
        style={styles}
        onMouseEnter={(event) =>
          (event.currentTarget.style.backgroundColor = '#07c')
        }
        onMouseLeave={(event) =>
          (event.currentTarget.style.backgroundColor = '#0095ff')
        }
        onClick={func}
      >
        {text}
      </button>
    </>
  );
};

export default GraphButton;
