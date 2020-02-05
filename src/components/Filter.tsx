import React from "react";
import styled from "styled-components";
import Checkbox from "./Checkbox";

const Wrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  max-width: 250px;
  padding-bottom: 10px;
  max-height: 225px;
`;

const Title = styled.span`
  padding: 20px 20px 10px 20px;
  display: block;
  text-transform: uppercase;
  font-size: 14px;
  color: #4a4a4a;
  line-height: 12px;
  letter-spacing: 0.5px;
`;

const FilterBlock = styled.div``;

const CheckBoxWrapper = styled.div``;

interface IFilterData {
  id: number;
  label: string;
}

const Filter: React.FC = () => {
  const FilterData: Array<IFilterData> = [
    {
      id: 1,
      label: "Без пересадок"
    },
    {
      id: 2,
      label: "1 пересадка"
    },
    {
      id: 3,
      label: "2 пересадка"
    },
    {
      id: 4,
      label: "3 пересадка"
    }
  ];

  return (
    <>
      <Wrapper>
        <FilterBlock>
          <Title>количество пересадок</Title>
          <CheckBoxWrapper>
            {FilterData &&
              FilterData.map((f: IFilterData) => {
                return <Checkbox id={f.id} key={f.id} label={f.label} />;
              })}
          </CheckBoxWrapper>
        </FilterBlock>
      </Wrapper>
    </>
  );
};

export default Filter;
