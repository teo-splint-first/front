import React from "react";
import { useLocation, useNavigate } from "react-router";
import Template from "../common/Template";
import styled from "styled-components";

const Result = () => {
  const navigate = useNavigate();
  const {
    state: { template, result },
  } = useLocation();

  return (
    <Template>
      <Top>
        <ResultDesc>
          <Text>Selector가 {template}에서</Text>
          <ResultText>{result}</ResultText>
          <Text>골랐습니다.</Text>
        </ResultDesc>
        <LinkButton onClick={() => navigate(-1)}>다시 돌리기</LinkButton>
        <LinkButton onClick={() => navigate("/")}>메인으로</LinkButton>
      </Top>
      <MapDesc>
        {`지도를 이용해\n
        주변 가게를 추천해드립니다.`}
      </MapDesc>
      <LastButton
        onClick={() => {
          window.open(`https://map.naver.com/v5/search/${result}`);
        }}
      >
        주변 가게 추천받기
      </LastButton>
    </Template>
  );
};

const Top = styled.div`
  margin-bottom: 85px;
`;
const Text = styled.p`
  font-size: 18px;
  color: #fff;
  text-align: center;
  margin: 0;
  line-height: 1.15;
`;
const ResultText = styled.p`
  font-size: 40px;
  color: #10af8d;
  text-align: center;
  margin: 0;
  line-height: 1.15;
`;
const ResultDesc = styled.div`
  margin-bottom: 35px;
  & > p {
    margin-bottom: 10px;
  }
`;
const MapDesc = styled.p`
  font-size: 1.15em;
  margin-bottom: 20px;
  white-space: pre-wrap;
  color: #fff;
  text-align: center;
  line-height: 1;
`;

const LinkButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  font-size: 1.5em;
  color: #fff;
  background-color: #10af8d;
`;
const LastButton = styled(LinkButton)`
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 60px);
`;

export default Result;
