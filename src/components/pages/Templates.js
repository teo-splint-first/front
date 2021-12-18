import React, { useCallback } from "react";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
import Template from "../common/Template";
import { data } from "../../mock/mock";
import { topicBtnArr } from "../../mock/constant";

const Templates = () => {
  const navigate = useNavigate();
  const { topic } = useParams();
  const randomPick = useCallback(() => {
    const len = data[topic].length;
    const randomNum = Math.floor(Math.random() * len);
    return data[topic][randomNum];
  }, [topic]);
  return (
    <Template goBackBtn>
      <Text size={"1.5em"}>
        ( {topicBtnArr.find((el) => el.key === topic).label} )
      </Text>
      <Text>원하는 룰렛을 선택하세요</Text>
      <RouletteWrap>
        {data[topic].map((roulette, index) => {
          return (
            <Roulette
              key={index}
              onClick={() => navigate("/roulette", { state: roulette })}
            >
              <RouletteTop>{roulette.title_give}</RouletteTop>
              <RouletteBottom>
                {roulette.contents_give
                  .map((food) => `${food.name}`)
                  .join(", ")}
              </RouletteBottom>
            </Roulette>
          );
        })}
      </RouletteWrap>
      <ButtonSection>
        <LinkButton
          onClick={() => navigate("/roulette", { state: randomPick() })}
        >
          아무거나 랜덤 선택
        </LinkButton>
        <LinkButton onClick={() => navigate("/make")}>
          새로운 룰렛 생성
        </LinkButton>
      </ButtonSection>
    </Template>
  );
};
const ButtonSection = styled.section`
  position: absolute;
  width: calc(100% - 60px);
  bottom: 30px;
`;
const Text = styled.p`
  font-size: ${(p) => (p.size ? p.size : "1.5em")};
  color: #fff;
  text-align: center;
  margin-bottom: 0.7em;
  line-height: 1.15;
`;

const RouletteWrap = styled.div`
  width: 100%;
  height: calc(100% - 300px);
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
  margin-bottom: 10px;

  & > div {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    padding: 8px 12px;
  }
`;

const RouletteTop = styled.div`
  font-size: 1.2em;
  background-color: #10af8d;
`;

const RouletteBottom = styled.div`
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
  font-size: 18px;
  color: #fff;
  background-color: #10af8d;
`;

export default Templates;
