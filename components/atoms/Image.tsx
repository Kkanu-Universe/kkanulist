import React, { memo } from 'react';
import styled from '@emotion/styled';

const ImgWrap = styled.img`
  width: 100%;
`;

interface IImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

function Image(props: IImgProps) {
  return <ImgWrap {...props} />;
}

export default memo(Image);
