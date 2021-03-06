import React, { useState } from "react";
import { Slider, Input } from "antd";
import Template from "../common/Template";
import { EditOutlined } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router";
import styled from "styled-components";
import "antd/dist/antd.css";

const MakeTemplate = () => {
  const { state: rouletteData } = useLocation();
  const [title, setTitle] = useState(rouletteData?.title_give || "");
  const [isEdit, setIsEdit] = useState(false);
  const [roulette, setRoulette] = useState(
    rouletteData
      ? rouletteData.contents_give.map((el) => ({ label: el.name, point: 5 }))
      : [],
  );
  const [inputVal, setInputVal] = useState("");
  const navigate = useNavigate();
  const handleEdit = () => {
    setIsEdit((prev) => !prev);
  };
  const handleAdd = () => {
    if (inputVal === "") {
      alert("음식이름을 작성해주세요.");
      return;
    }
    if (roulette.length === 4) {
      alert("현재 룰렛은 4개만 가능합니다.");
      return;
    }
    setRoulette((prev) => [...prev, { label: inputVal, point: 5 }]);
    setInputVal("");
  };
  const handleAfterChange = (idx, val) => {
    const tmpRoulette = [...roulette];
    tmpRoulette[idx].point = val;
    setRoulette(tmpRoulette);
  };
  const handleDelete = (idx) => {
    setRoulette((prev) => prev.filter((el, elIdx) => idx !== elIdx));
  };
  const handleSubmit = () => {
    if (title === "") {
      alert("음식이름을 작성해주세요.");
      return;
    }
    if (roulette.length !== 4) {
      alert("현재 룰렛은 4개만 가능합니다.");
      return;
    }

    navigate("/roulette", {
      state: {
        title_give: title,
        contents_give: roulette
          .slice(0, 4)
          .map((el) => ({ name: el.label, percent: 25 })),
      },
    });
  };
  return (
    <Template goBackBtn={true}>
      {!isEdit && (
        <Title>
          {title === "" ? "룰렛이름을 정해주세요" : title}
          <EditOutlined
            onClick={handleEdit}
            style={{ marginLeft: "10px", cursor: "pointer" }}
          />
        </Title>
      )}
      {isEdit && (
        <Search
          value={title}
          onSearch={handleEdit}
          onChange={(e) => setTitle(e.target.value)}
          enterButton="변경완료"
        />
      )}
      <Search
        placeholder="추가할 음식을 작성해주세요."
        allowClear
        enterButton="추가"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        size="large"
        onSearch={handleAdd}
      />
      <ul>
        {roulette.map((el, idx) => (
          <li key={idx}>
            <List>
              <ListLabel>{el.label}</ListLabel>
              <Slider
                style={{ width: "100%" }}
                max={10}
                min={0}
                defaultValue={el.point}
                onAfterChange={(val) => handleAfterChange(idx, val)}
                tooltipVisible={false}
                trackStyle={{ background: "#10af8d" }}
                handleStyle={{
                  borderColor: "#10af8d",
                }}
              />
              <DeleteButton onClick={() => handleDelete(idx)}>
                삭제
              </DeleteButton>
            </List>
          </li>
        ))}
      </ul>
      <Submit onClick={handleSubmit}>완료</Submit>
    </Template>
  );
};

export default MakeTemplate;
const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.8em;
`;
const Search = styled(Input.Search)`
  margin-bottom: 30px;

  .ant-input-search-button {
    background: #10af8d;
    border-color: #10af8d;
  }
`;
const List = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;
const ListLabel = styled.h3`
  color: #fff;
  margin: 0;
  min-width: 50px;
`;

const DeleteButton = styled.button`
  border: 0;
  background: none;
  color: #fff;
  min-width: 40px;
`;
const Submit = styled.button`
  width: calc(100% - 100px);
  background: #10af8d;
  padding: 12px 0;
  font-size: 25px;
  color: white;
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
`;
