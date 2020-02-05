import React, { useState } from "react";
import styled from "styled-components";

const CheckboxContainer = styled.div`
  transition: 0.3s all;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background: #f1fcff;
  }
`;
const CheckboxBlock = styled.div`
  display: flex;
  align-items: center;
  color: #4a4a4a;
`;
const StyledCheckBox = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid #9abbce;
  border-radius: 2px;
  position: relative;
  cursor: pointer;
  outline: none;
  margin-right: 10px;
`;

const Icon = styled.svg`
  fill: none;
  stroke: #2196f3;
  stroke-width: 2px;
`;

interface IProps {
  id: number;
  label: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<IProps> = ({ label, id }) => {
  const [checked, setChecked] = useState(false);

  function __handleChecked() {
    setChecked(!checked);
  }

  return (
    <>
      <CheckboxContainer onClick={() => __handleChecked()}>
        <CheckboxBlock>
          <StyledCheckBox id={`checkbox_${id}`}>
            {checked && (
              <Icon viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" />
              </Icon>
            )}
          </StyledCheckBox>
          <label htmlFor={`checkbox_${id}`}>{label}</label>
        </CheckboxBlock>
      </CheckboxContainer>
    </>
  );
};

export default Checkbox;
