import React from "react";

const FilterInput = (props) => {
  return (
    <div>
      filter shown with <input onChange={props.onChange}/>
    </div>
  )
}

export default FilterInput;

