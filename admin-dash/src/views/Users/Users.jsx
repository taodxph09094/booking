import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import authorsTableData from "layouts/tables/data/authorsTableData";
import { useNavigate } from "react-router-dom";
const Users = () => {
  let navigate = useNavigate();
  const onPressEdit = () => {
    navigate("/admin/updateUser");
  };
  const { columns, rows } = authorsTableData();
  const onPress = () => {
    navigate("/admin/addUser");
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Danh sách tài khoản
                </MDTypography>
                <MDButton onClick={onPress} variant="gradient" color="dark">
                  <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                  &nbsp;thêm tài khoản
                </MDButton>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
};

export default Users;
