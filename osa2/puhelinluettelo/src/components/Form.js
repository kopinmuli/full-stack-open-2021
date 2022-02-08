import React from "react";

const Form = (props) => {
  return (
    <form onSubmit={props.submit}>
        <div>
          name: <input 
                  value={props.nameinput} 
                  onChange={props.nameonChange}
                />
        </div>
        <div>number: <input
                       value={props.numberinput} 
                       onChange={props.numberonChange}
                  />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

export default Form;
