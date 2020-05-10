import React from "react";
import styled from "styled-components";
import UnderlineHover from "../common";

const RatingsAndQuestions = (props) => {
  return (
    <>
      <UnderlineHover>
        {props.numberOfRatings
          ? `${props.numberOfRatings} ratings`
          : ""}
      </UnderlineHover>
      <UnderlineHover>
        {props.numberOfAnsweredQuestions ? (
          <div>
            <span style={{ color: "black" }}> | </span>
            {props.numberOfAnsweredQuestions}
            {' '}
            answered questions
          </div>
        ) : (
            ""
          )}
      </UnderlineHover>
    </>
  )
}

export default RatingsAndQuestions;