import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAdmin, element: Component }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);
  let navigate = useNavigate();
  return (
    <Fragment>
      {loading === false && (
        <Route
          render={(props) => {
            if (isAuthenticated === false) {
              return <Navigate to="/login" />;
            }

            if (isAdmin === true && user.role !== "admin") {
              return <Navigate to="/login" />;
            }

            return <Component {...props} />;
          }}
        />
      )}
    </Fragment>
  );
};

export default ProtectedRoute;
