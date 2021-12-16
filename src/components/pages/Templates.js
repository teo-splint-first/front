import React, { useCallback } from "react";
import { useLocation, useNavigate } from "react-router";
import styled from "styled-components";
import Template from "../common/Template";
import { data } from "../../mock/mock";

const Templates = () => {
  const navigate = useNavigate();
  const { state: topic } = useLocation();

  const randomPick = useCallback(() => {
    const len = data[topic].length;
    const randomNum = Math.floor(Math.random() * len);

    return data[topic][randomNum];
  }, []);

  return (
    <Template goBackBtn>
      <Text>원하는 룰렛을 선택하세요</Text>
      <RouletteWrap>
        {data[topic].map((roulette, index) => (
          <Roulette key={index} onClick={() => navigate("/roulette", { state: roulette })}>
            <RouletteTop>{roulette.title_give}</RouletteTop>
            <RouletteBottom>{roulette.contents_give.map((food) => `${food.name}, `)}</RouletteBottom>
          </Roulette>
        ))}
      </RouletteWrap>
      <LinkButton onClick={() => navigate("/roulette", { state: randomPick() })}>아무거나 랜덤 선택</LinkButton>
      <LinkButton onClick={() => navigate("/make")}>새로운 룰렛 생성</LinkButton>
    </Template>
  );
};

const Text = styled.p`
  font-size: 28px;
  color: #fff;
  text-align: center;
  margin-bottom: 20px;
  line-height: 1.15;
`;

const RouletteWrap = styled.div`
  width: 100%;
  height: 330px;
  margin-bottom: 30px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #10af8d;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
`;

const Roulette = styled.div`
  cursor: pointer;
  width: 100%;
  color: #fff;
  font-size: 25px;
  margin-bottom: 10px;

  & > div {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    min-height: 50px;
    padding: 10px 20px;
  }
`;

const RouletteTop = styled.div`
  background-color: #10af8d;
`;

const RouletteBottom = styled.div`
  font-size: 22px;
  background-color: #21bf9e;
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

export default Templates;
