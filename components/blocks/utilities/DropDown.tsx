import styled from '@emotion/styled';
import { BtnStyle } from "@atom/Button";

type Options = {
  label: string;
  link: string;
}[];

type DropdownProps = {
  options: Options;
}

const DropDownWrap = styled.button`
  position: relative;
  display: inline-block;

  &:hover > div {
    display: block;
  }
`

const Button = styled.div`
  ${BtnStyle}
`

const DropDownContentWrap = styled.div`
  display: none;
  position: absolute;
  background-color: var(--color-midnight);
  border-radius: var(--border-radius-default);
  min-width: 160px;
  z-index: 1;
`

const DropDownContent = styled.a`
  color: var(--color-white);
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  &:hover {
    background-color: var(--color-gray-3);

    &:first-child{
      border-top-right-radius: var(--border-radius-default);
      border-top-left-radius: var(--border-radius-default);
    }

    &:last-child{
      border-bottom-right-radius: var(--border-radius-default);
      border-bottom-left-radius: var(--border-radius-default);
    }
  }


`

// a 태그가 연결되어 있는 드롭다운 컴포넌트
function DropDown({ options , ...rest }: DropdownProps){
  return (
    <DropDownWrap>
      <Button> Dropdown btn </Button>
      <DropDownContentWrap>
        {options.map((option, idx) => (
            <DropDownContent key={`dropdown-${idx}`} href={option.link}>{option.label}</DropDownContent>
        ))}
      </DropDownContentWrap>
    </DropDownWrap>
  );
}

export default DropDown; 