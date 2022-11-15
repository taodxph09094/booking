import React from "react";
import Card from "@mui/material/Card";
// import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";
import Button from "@mui/material/Button";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import burceMars from "assets/images/bruce-mars.jpg";
import MDButton from "components/MDButton";
import { useNavigate } from "react-router-dom";
// Billing page components
import Bonus from "./Bonus";
const UpdateRightForm = () => {
  let navigate = useNavigate();
  const onPressBack = () => {
    navigate("/admin/users");
  };
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          Hành động
        </MDTypography>
        <MDBox display="flex" alignItems="flex-start">
          <MDBox color="text" mr={0.5} lineHeight={0}>
            <Icon color="inherit" fontSize="small">
              date_range
            </Icon>
          </MDBox>
          <MDTypography variant="button" color="text" fontWeight="regular">
            23 - 30 March 2020
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox pt={3} pb={2} px={2}>
        <MDBox mb={2}>
          <MDTypography variant="caption" color="text" fontWeight="bold" textTransform="uppercase">
            Người sửa
          </MDTypography>
        </MDBox>
        <MDBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          {/* <MDAvatar src={burceMars} alt="profile-image" size="xl" shadow="sm" /> */}
          <Bonus
            color="success"
            icon={burceMars}
            name="Name"
            description="sss@gmail.com"
            value="Admin"
          />
        </MDBox>
        <MDBox mt={4} mb={1}>
          <MDButton variant="gradient" color="info" fullWidth>
            Sửa tài khoản
          </MDButton>
        </MDBox>
        <MDBox mt={4} mb={1}>
          <MDButton onClick={onPressBack} variant="outlined" color="info" fullWidth>
            Quay lại
          </MDButton>
        </MDBox>
        <MDBox mt={1} mb={2}></MDBox>
      </MDBox>
    </Card>
  );
};

export default UpdateRightForm;
