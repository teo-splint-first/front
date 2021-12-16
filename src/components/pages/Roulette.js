import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router";
import Template from "../common/Template";

const Roulette = () => {
  const navigate = useNavigate();
  const { state: roulette } = useLocation();
  const canvasRef = useRef();
  useEffect(() => {
    var ctx = canvasRef.current.getContext("2d");
    ctx.beginPath();
    ctx.arc(50, 50, 20, 0, Math.PI * 2);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.stroke();
  }, []);
  return (
    <Template goBackBtn>
      <canvas ref={canvasRef} width="150" height="150"></canvas>
    </Template>
  );
};

export default Roulette;
