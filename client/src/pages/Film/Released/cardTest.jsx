import React from "react";
import { Link } from "react-router-dom";

const cardTest = ({ rt }) => {
  return (
    <div className="col-lg-4 col-md-4 col-sm-6 ">
      <Link>
        <p>{rt.name}</p>
      </Link>
    </div>
  );
};

export default cardTest;
