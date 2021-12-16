import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

// 뒤로가기 버튼 필요하시면 props로 goBackBtn 추가하심 됩니다.
const Template = ({ children, goBackBtn }) => {
  const navigate = useNavigate();
  return (
    <FullWrap>
      <MainTemplate>
        <TemplateTop>
          {goBackBtn ? (
            <GoBackBtn onClick={() => navigate(-1)}>
              <span></span>
            </GoBackBtn>
          ) : (
            <></>
          )}
          <Title># Selector</Title>
        </TemplateTop>
        {children}
      </MainTemplate>
    </FullWrap>
  );
};

const FullWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const MainTemplate = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 480px;
  height: 700px;
  padding: 50px 60px;
  background-color: #6bc59c;
  box-shadow: 4px 4px 20px 0 rgba(0, 0, 0, 0.15);
`;

const TemplateTop = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const GoBackBtn = styled.div`
  cursor: pointer;
  position: absolute;
  left: 0;
  display: flex;
  align-items: center;
  width: 30px;
  height: 30px;

  & > span {
    position: relative;
    display: block;
    width: 100%;
    height: 3px;
    background-color: #fff;
    border-radius: 3px;

    &::after,
    &::before {
      position: absolute;
      left: -3px;
      content: "";
      display: block;
      width: 20px;
      height: 3px;
      background-color: #fff;
      border-radius: 3px;
    }

    &::after {
      top: 6px;
      transform: rotate(45deg);
    }

    &::before {
      top: -6px;
      transform: rotate(-45deg);
    }
  }
`;

const Title = styled.h1`
  color: #fff;
  font-size: 50px;
`;

export default Template;
