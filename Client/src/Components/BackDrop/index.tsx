import React, { memo } from 'react';
import styled from 'styled-components';

const BackdropDiv = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 10;
  top: 0;
  left: 0;
  cursor: default;
  background-color: rgba(0, 0, 0, 0);
`;

type BackdropProp = {
  show: boolean;
  clicked: () => void;
};

const BackDrop: React.FC<BackdropProp> = memo(({ show, clicked }) => {
  return show ? <BackdropDiv onClick={clicked} /> : null;
});
export default BackDrop;
