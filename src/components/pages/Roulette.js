import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router";
import styled from "styled-components";
import Template from "../common/Template";

const Roulette = () => {
  const navigate = useNavigate();
  const { state: roulette } = useLocation();
  const canvasRef = useRef();
  console.log(roulette);
  useEffect(() => {
    var ctx = canvasRef.current.getContext("2d");
    ctx.beginPath();
    ctx.arc(100, 100, 20, 0, Math.PI * 2);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.stroke();
  }, []);

  return (
    <Template goBackBtn>
      <canvas ref={canvasRef} width="150" height="150"></canvas>
      <LinkButton onClick={() => navigate("/make")}>수정</LinkButton>
      <LinkButton onClick={() => navigate("/result")}>돌리기</LinkButton>
    </Template>
  );
};

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
