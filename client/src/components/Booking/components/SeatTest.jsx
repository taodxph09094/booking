import React from 'react';
import SingleSeat from "./SingleSeat";
const SeatTest = () => {
  const [selected, setSelected] = React.useState([]);
  return (
    <div className="App">
      <SingleSeat setSelected={setSelected} />
      <div className="footer">
        <spam>
          <h3>SEATS : {selected.toString()}</h3>
        </spam>
        <button className="btn btn-warning">Continue</button>
      </div>
    </div>
  )
}

export default SeatTest