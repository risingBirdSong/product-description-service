/* eslint-disable no-unused-expressions */
import React from "react";
import styled from "styled-components";


const Azchoice = styled.div`
  background-color: rgb(35, 47, 62);
  box-sizing: border-box;
  color: rgb(17, 17, 17);
  display: flex;
  float: none;
  font-family: "Amazon Ember", Arial, sans-serif;
  font-size: 12px;
  height: 15px;
  line-height: 10px;
  text-size-adjust: 100%;
  justify-content: center;
  align-items: center;
  width: 80px;
  overflow: hidden;
`;

const Triangle = styled.div`
  border-bottom-color: rgb(35, 47, 62);
  border-left-color: rgb(35, 47, 62);
  border-top-color: rgb(35, 47, 62);
  color: rgb(35, 47, 62);
  width: 0;
  height: 0;
  border-top: 35px solid transparent;
  border-bottom: 35px solid transparent;
  align-self: flex-end;
  border-left: 22px solid;
  background-color: white;
`;


const AzChoiceComp = (props) => {
  return (
    <div style={{ marginTop: "4px" }}>
      {props.amazonsChoice ? (
        <Azchoice>
          <p
            style={{
              color: "white",
              marginLeft: "16px",
              fontSize: "9px",
            }}
          >
            Amazon's
            {" "}
          </p>
          {" "}
                      &nbsp;
          <p style={{ color: "orange", fontSize: "9px" }}> Choice</p>
          <Triangle />
        </Azchoice>
      ) : (
          ""
        )}
    </div>
  )
}


export default AzChoiceComp;