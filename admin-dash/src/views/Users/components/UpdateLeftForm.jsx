import React from "react";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Billing page components
import Bill from "layouts/billing/components/Bill";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
const UpdateLeftForm = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Card id="delete-account">
      <MDBox pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium">
          Nhập thông tin tài khoản
        </MDTypography>
      </MDBox>
      <MDBox pt={1} pb={2} px={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <MDBox mb={2}>
            <TextField
              id="outlined-basic"
              label="Họ và tên"
              variant="outlined"
              type="text"
              fullWidth
            />
          </MDBox>
          <MDBox mb={2}>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type="email"
              fullWidth
            />
          </MDBox>
          <MDBox mb={2}>
            <TextField
              id="outlined-basic"
              label="Mật khẩu"
              variant="outlined"
              type="password"
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
              label="Số điện thoại"
              variant="outlined"
              type="text"
              fullWidth
            />
          </MDBox>
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="demo-simple-select-label">Chọn quyên</InputLabel>
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
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </MDBox>
      </MDBox>
    </Card>
  );
};

export default UpdateLeftForm;
