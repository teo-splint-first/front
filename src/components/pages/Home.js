import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Template from "../common/Template";

const Home = () => {
  const navigate = useNavigate();
  const topicBtnArr = ["혼자", "친구", "회사", "가족", "회식", "비오는날", "소개팅", "단체"];
  return (
    <Template>
      <Desc>
        <Text>일상 속 고민되는 메뉴들</Text>
        <Text>Selector로 메뉴를 결정해보세요</Text>
      </Desc>
      <Text>상황에 맞는 주제를 골라보세요</Text>
      <Topic>
        {topicBtnArr.map((topic) => (
          <Btn key={topic} onClick={() => navigate("/template", { state: topic })}>
            {topic}
          </Btn>
        ))}
      </Topic>
    </Template>
  );
};
const Text = styled.p`
  font-size: 28px;
  color: #fff;
  text-align: center;
  line-height: 1.15;
  margin: 0;
`;
const Desc = styled.div`
  margin-bottom: 137px;
`;

const Topic = styled.div`
  margin-top: 30px;
`;

const Btn = styled.button`
  cursor: pointer;
  width: 170px;
  height: 50px;
  margin-bottom: 20px;
  color: #fff;
  font-size: 25px;
  background-color: #10af8d;

  &:nth-child(1),
  &:nth-child(3),
  &:nth-child(5),
  &:nth-child(7) {
    margin-right: 20px;
  }
`;

export default Home;
