import React from "react";

const Paragraphs = (props) => {
  return (
    <>
      <p>{props.extraInfo}</p>
      <p>{props.compareOptions}</p>
      <p>{props.technicalDetails}</p>
      <p>{props.Used}</p>
      <p>{props.freeShipping}</p>
    </>
  )
}

export default Paragraphs;