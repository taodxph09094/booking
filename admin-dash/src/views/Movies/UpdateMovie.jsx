import React from "react";
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import authorsTableData from "layouts/tables/data/authorsTableData";
import { useNavigate, Link } from "react-router-dom";

import BillingInformation from "layouts/billing/components/BillingInformation";
import Transactions from "layouts/billing/components/Transactions";

import TextField from "@mui/material/TextField";
import UpdateLeftForm from "./components/Update/UpdateLeftForm";
import UpdateRightForm from "./components/Update/UpdateRightForm";

const UpdateMovie = () => {
  return (
    <DashboardLayout>
      <DashboardNavbar absolute isMini />
      <MDBox mt={8}>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              {/* <p>hi</p> */}
              <UpdateLeftForm />
            </Grid>
            <Grid item xs={12} md={5}>
              {/* <p>hi</p> */}
              <UpdateRightForm />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
};

export default UpdateMovie;
