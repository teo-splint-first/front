import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Template from "../common/Template";
import { topicBtnArr } from "../../mock/constant";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Template>
      <Desc>{`일상 속 고민되는 메뉴들\nSelector로 메뉴를 결정해보세요`}</Desc>
      <TopicSection>
        <Text>상황에 맞는 주제를 골라보세요</Text>
        <Topic>
          {topicBtnArr.map((topic) => (
            <Btn key={topic} onClick={() => navigate(`/template/${topic.key}`)}>
              {topic.label}
            </Btn>
          ))}
        </Topic>
      </TopicSection>
    </Template>
  );
};
const Text = styled.p`
  font-size: 1.5em;
  color: #fff;
  text-align: center;
`;
const Desc = styled.p`
  white-space: pre-wrap;
  color: #fff;
  font-size: 1.5em;
  text-align: center;
  line-height: 1.5;
  margin-top: 30px;
`;

const Topic = styled.div`
  margin-top: 30px;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Btn = styled.button`
  cursor: pointer;
  width: calc((100% - 12px) / 2);
  padding: 8px 12px;
  margin-bottom: 12px;
  color: #fff;
  font-size: 25px;
  background-color: #10af8d;
`;

const TopicSection = styled.section`
  position: absolute;
  left: 50%;
  bottom: 50px;
  width: calc(100% - 60px);
  transform: translateX(-50%);
`;

export default Home;
