import React, { memo } from 'react';
import styled from 'styled-components';

const ImgWrap = styled.img`
  width: 100%;
`;

interface IImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

function Image(props: IImgProps) {
  return <ImgWrap {...props} />;
}

export default memo(Image);
