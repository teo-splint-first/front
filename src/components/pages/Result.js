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
        <Text>지도를 이용해</Text>
        <Text>주변 가게를 추천해드립니다.</Text>
      </MapDesc>
      <LinkButton>주변 가게 추천받기</LinkButton>
    </Template>
  );
};

const Top = styled.div`
  margin-top: 50px;
  margin-bottom: 85px;
`;
const Text = styled.p`
  font-size: 28px;
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
const MapDesc = styled.div`
  margin-bottom: 20px;
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

export default Result;
