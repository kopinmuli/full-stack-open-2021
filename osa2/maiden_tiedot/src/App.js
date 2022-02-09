import React from 'react'
import Course from './components/Course'



function App() {

  const [filter, setFilter] = useState("");

  const handleFilter = (event) => {
    setFilter(event.target.value);
  };







  return (
   <div>
     find countries <input onChange={handleFilter}></input>
   </div>
  );
}

export default App;
