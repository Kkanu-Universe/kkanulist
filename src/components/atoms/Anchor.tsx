import React, { memo } from 'react';
import styled from 'styled-components';

interface IAnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
}

const AnchorWrap = styled.a``;

function Anchor({ children, ...rest }: IAnchorProps) {
  return <AnchorWrap {...rest}>{children}</AnchorWrap>;
}

export default memo(Anchor);
