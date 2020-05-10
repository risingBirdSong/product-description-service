import React from "react";
import styled from "styled-components";

const StarImage = styled.div`
  background-image: url(https://m.media-amazon.com/images/G/01/AUIClients/AmazonUIIcon-sprite_2x-59b95eac1db4a9d78e1e0c0b657cf66277a106ae._V2_.png);
  background-position-x: ${(props) => props.coords}px;
  background-position-y: -368px;
  background-repeat-x: ;
  background-repeat-y: ;
  background-size: 400px 900px;
  color: rgb(0, 102, 192);
  cursor: pointer;
  display: inline-block;
  font-family: "Amazon Ember", Arial, sans-serif;
  font-size: 13px;
  font-style: italic;
  height: 18px;
  line-height: 19px;
  position: relative;
  text-size-adjust: 100%;
  vertical-align: text-top;
  width: 80px;
`;

const StarImageComp = (props) => {
  console.log("props star ", props);
  return (
    <StarImage
      className="starImage"
      aria-label={`rated ${props.rating} out of 5 stars`}
      coords={props.coords}
    />
  );
};

export default StarImageComp;
