import React, { useCallback, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import styled from "styled-components";
import Template from "../common/Template";

const Roulette = () => {
  const navigate = useNavigate();
  const { state: roulette } = useLocation();
  const rouletteRef = useRef();
  const [randomRotate, setRandom] = useState(0);
  const onRoulette = useCallback(() => {
    const randomDeg = Math.floor(Math.random() * 360) + 3555;
    const resultIndex = Math.floor((randomDeg - 3555) / 90);
    setRandom(randomDeg);
    setTimeout(() => {
      navigate("/result", {
        state: {
          template: roulette.title_give,
          result: roulette.contents_give[resultIndex].name,
        },
      });
    }, 4500);
  }, [roulette, navigate]);

  return (
    <Template goBackBtn>
      <RouletteTitle>{roulette.title_give}</RouletteTitle>
      <Pin />
      <Outer ref={rouletteRef} rotate={randomRotate}>
        <O>
          <Item />
          <Item />
          <Item />
          <Item />
          {roulette.contents_give.map((food, i) => (
            <FoodName key={i}>{food.name}</FoodName>
          ))}
        </O>
      </Outer>
      <LinkButton onClick={() => navigate("/make", { state: roulette })}>
        수정
      </LinkButton>
      <LinkButton onClick={onRoulette}>돌리기</LinkButton>
    </Template>
  );
};

const RouletteTitle = styled.p`
  color: #fff;
  font-size: 28px;
  text-align: center;
  margin-bottom: 30px;
  line-height: 1.15;
`;

const Pin = styled.div`
  position: absolute;
  z-index: 10;
  top: 190px;
  left: 50%;
  width: 0;
  height: 0;
  border-bottom: 10px solid transparent;
  border-top: 10px solid transparent;
  border-left: 25px solid #10af8d;
  border-right: 25px solid transparent;
  transform: translate(-50%, 0) rotate(90deg);
`;

const Outer = styled.div`
  overflow: hidden;
  width: 320px;
  height: 320px;
  margin: 0 auto 30px auto;
  border-radius: 50%;
  transition: 4s;

  transform: ${({ rotate }) => `rotate(-${rotate}deg)`};
`;

const O = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Item = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: -0%;
  left: -0%;
  right: 0;
  bottom: 0;
  width: 320px;
  height: 320px;

  &:nth-child(1) {
    background-color: #ae7f6c;
    transform: translate(0%, -70.7%) rotate(45deg);
  }
  &:nth-child(2) {
    background-color: #ceae88;
    transform: translate(70.7%, 0%) rotate(45deg);
  }
  &:nth-child(3) {
    background-color: #478bff;
    transform: translate(0%, 70.7%) rotate(45deg);
  }
  &:nth-child(4) {
    background-color: #fd8468;
    transform: translate(-70.7%, 0%) rotate(45deg);
  }
`;

const FoodName = styled.span`
  position: absolute;
  color: #fff;
  font-size: 18px;
  transform: translate(-50%, -50%);

  &:nth-child(5) {
    top: 40px;
    left: 50%;
  }
  &:nth-child(6) {
    width: 80px;
    top: 50%;
    left: 275px;
    transform: translate(-50%, -50%) rotate(90deg);
    text-align: center;
  }
  &:nth-child(7) {
    bottom: 15px;
    left: 50%;
    transform: translate(-50%, -50%) rotate(180deg);
  }
  &:nth-child(8) {
    left: 45px;
    top: 50%;
    transform: translate(-50%, -50%) rotate(270deg);
  }
`;

const LinkButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  font-size: 25px;
  color: #fff;
  background-color: #10af8d;
`;

export default Roulette;
