import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import authorsTableData from "layouts/tables/data/authorsTableData";
import { useNavigate, Link } from "react-router-dom";
import burceMars from "assets/images/bruce-mars.jpg";
import MDButton from "components/MDButton";
import Bonus from "./Bonus";
const AddCinema = () => {
  let navigate = useNavigate();
  const onPressBack = () => {
    navigate("/admin/cinemas");
  };
  return (
    <DashboardLayout>
      <DashboardNavbar absolute isMini />
      <MDBox mt={8}>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              {/* Left */}
              <Card id="delete-account">
                <MDBox pt={3} px={2}>
                  <MDTypography variant="h6" fontWeight="medium">
                    Nhập thông tin rạp phim
                  </MDTypography>
                </MDBox>
                <MDBox pt={1} pb={2} px={2}>
                  <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
                    <MDBox mb={2}>
                      <TextField
                        id="outlined-basic"
                        label="Tên rạp"
                        variant="outlined"
                        type="text"
                        fullWidth
                      />
                    </MDBox>
                    <MDBox mb={2}>
                      <TextField
                        id="outlined-basic"
                        label="Địa chỉ"
                        variant="outlined"
                        type="text"
                        fullWidth
                      />
                    </MDBox>
                    <MDBox mb={2}>
                      <TextField
                        id="outlined-basic"
                        label="Hình ảnh"
                        variant="outlined"
                        type="text"
                        fullWidth
                      />
                    </MDBox>
                    <MDBox mb={2}></MDBox>
                  </MDBox>
                </MDBox>
              </Card>
            </Grid>
            <Grid item xs={12} md={5}>
              {/* Right*/}
              <Card sx={{ height: "100%" }}>
                <MDBox
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  pt={3}
                  px={2}
                >
                  <MDBox
                    component="ul"
                    display="flex"
                    flexDirection="column"
                    p={0}
                    m={0}
                    sx={{ listStyle: "none" }}
                  >
                    {/* <MDAvatar src={burceMars} alt="profile-image" size="xl" shadow="sm" /> */}
                    <Bonus color="success" icon={burceMars} name="Name" description="Admin" />
                  </MDBox>
                  <MDBox display="flex" alignItems="flex-start">
                    <MDBox color="text" mr={0.5} lineHeight={0}>
                      <Icon color="inherit" fontSize="small">
                        date_range
                      </Icon>
                    </MDBox>
                    <MDTypography variant="button" color="text" fontWeight="regular">
                      Hôm nay,{" "}
                      {new Date().getDate() +
                        "-" +
                        new Date().getMonth() +
                        "-" +
                        new Date().getFullYear()}
                    </MDTypography>
                  </MDBox>
                </MDBox>
                <MDBox px={2}>
                  <MDBox mt={4} mb={1}>
                    <MDButton variant="gradient" color="info" fullWidth>
                      Thêm rạp mới
                    </MDButton>
                  </MDBox>
                  <MDBox mt={3} mb={1}>
                    <MDButton onClick={onPressBack} variant="outlined" color="info" fullWidth>
                      Quay lại
                    </MDButton>
                  </MDBox>
                </MDBox>
              </Card>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
};

export default AddCinema;
