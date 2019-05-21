import React from 'react';

import styled from 'styled-components';

import cloudy from '../../icons/cloudy.svg';

const StyledWrapper = styled.div`
  display: flex;
  width: 500px;
  height: 200px;
  background-color: #b3afff;
  border-radius: 6px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

const StyledIconsWrapp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledTextWrapp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  color: #fff;
`;

const StyledImg = styled.img`
  width: 200px;
  height: 200px;
`;

const StyledName = styled.div`
  font-size: 30px;
  width: 100%;
  text-align: left;
`;

const StyledDeg = styled.div`
  font-size: 40px;
`;

const StyledDegWrapp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
`;

const CardWeather = ({ name, deg, isDark, onClick }) => (
  <StyledWrapper onClick={onClick}>
    <StyledIconsWrapp>
      <StyledImg src={cloudy} alt="icons" />
    </StyledIconsWrapp>

    <StyledTextWrapp>
      <StyledName>{name}</StyledName>
      <StyledDegWrapp>
        <StyledDeg>{deg}</StyledDeg>
        <span>°C</span>
      </StyledDegWrapp>
    </StyledTextWrapp>
  </StyledWrapper>
);

export default CardWeather;
