import React from "react";

const FilterInput = (props) => {
  return (
    <div>
      filter shown with <input key="filtteri" onChange={props.onChange}/>
    </div>
  )
}

export default FilterInput;

