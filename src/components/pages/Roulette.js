import React from "react";
import { useLocation, useNavigate } from "react-router";
import Template from "../common/Template";


const Roulette = () => {
  const navigate = useNavigate();
  const { state: roulette } = useLocation();
  
  return (
    <Template goBackBtn>
      
    </Template>
  );
};

export default Roulette;
