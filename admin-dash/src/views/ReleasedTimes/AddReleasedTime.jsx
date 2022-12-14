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
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
const AddReleasedTime = () => {
  let navigate = useNavigate();
  const onPressBack = () => {
    navigate("/admin/releasedTime");
  };
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [valueDate, setValueDate] = React.useState(
    dayjs("2022-11-30T21:11:54")
    // new Date().getDate() + "-" + new Date().getMonth() + "-" + new Date().getFullYear()
  );

  const handleChangeDate = (newValue) => {
    setValueDate(newValue);
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
                    Nh???p th??ng tin gi??? chi???u
                  </MDTypography>
                </MDBox>
                <MDBox pt={1} pb={2} px={2}>
                  <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
                    <FormControl sx={{ minWidth: 120, marginBottom: 1 }}>
                      <InputLabel id="demo-simple-select-label">Ch???n danh s??ch r???p</InputLabel>
                      <Select
                        style={{ height: 45 }}
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={age}
                        label="hihihi"
                        onChange={handleChange}
                        fullWidth
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>BHD</MenuItem>
                        <MenuItem value={20}>CGV</MenuItem>
                        <MenuItem value={20}>Lotte</MenuItem>
                        <MenuItem value={20}>Galaxy</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl sx={{ minWidth: 120, marginTop: 1, marginBottom: 1 }}>
                      <InputLabel id="demo-simple-select-label">Ch???n danh s??ch c???m r???p</InputLabel>
                      <Select
                        style={{ height: 45 }}
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={age}
                        label="hihihi"
                        onChange={handleChange}
                        fullWidth
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>IPH CGV</MenuItem>
                        <MenuItem value={20}>BHD C???u Gi???y</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl sx={{ minWidth: 120, marginTop: 1, marginBottom: 1 }}>
                      <InputLabel id="demo-simple-select-label">Ch???n danh s??ch phim</InputLabel>
                      <Select
                        style={{ height: 45 }}
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={age}
                        label="hihihi"
                        onChange={handleChange}
                        fullWidth
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Phim 1</MenuItem>
                        <MenuItem value={20}>Phim 2</MenuItem>
                      </Select>
                    </FormControl>
                    <MDBox mb={2}>
                      <TextField
                        id="outlined-basic"
                        label="?????a ch???"
                        variant="outlined"
                        type="text"
                        fullWidth
                      />
                    </MDBox>
                    <MDBox mb={2}>
                      <TextField
                        id="outlined-basic"
                        label="H??nh ???nh r???p"
                        variant="outlined"
                        type="text"
                        fullWidth
                      />
                    </MDBox>
                    <MDBox mb={2}>
                      <TextField
                        id="outlined-basic"
                        label="H??nh ???nh phim"
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
                      H??m nay,{" "}
                      {new Date().getDate() +
                        "-" +
                        new Date().getMonth() +
                        "-" +
                        new Date().getFullYear()}
                    </MDTypography>
                  </MDBox>
                </MDBox>
                <MDBox
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  pt={3}
                  px={2}
                >
                  <MDBox mb={2}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DesktopDatePicker
                        label="Date desktop"
                        inputFormat="DD/MM/YYYY"
                        value={valueDate}
                        onChange={handleChangeDate}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </MDBox>
                  <MDBox mb={2}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <TimePicker
                        label="Time"
                        value={valueDate}
                        onChange={handleChangeDate}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </MDBox>
                </MDBox>
                <MDBox px={2} mb={2}>
                  <TextField
                    id="outlined-basic"
                    label="Nh???p gi?? v??"
                    variant="outlined"
                    type="text"
                    fullWidth
                  />
                </MDBox>
                <MDBox px={2}>
                  <MDBox mt={4} mb={1}>
                    <MDButton variant="gradient" color="info" fullWidth>
                      Th??m l???ch chi???u m???i
                    </MDButton>
                  </MDBox>
                  <MDBox mt={3} mb={1}>
                    <MDButton onClick={onPressBack} variant="outlined" color="info" fullWidth>
                      Quay l???i
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

export default AddReleasedTime;
