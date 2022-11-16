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
const AddLeftForm = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Card id="delete-account">
      <MDBox pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium">
          Nhập thông tin phim
        </MDTypography>
      </MDBox>
      <MDBox pt={1} pb={2} px={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <MDBox mb={2}>
            <TextField
              id="outlined-basic"
              label="Tên phim"
              variant="outlined"
              type="text"
              fullWidth
            />
          </MDBox>
          <MDBox mb={2}>
            <TextField
              id="outlined-basic"
              label="Link ảnh"
              variant="outlined"
              type="text"
              fullWidth
            />
          </MDBox>
          <MDBox mb={2}>
            <TextField
              id="outlined-basic"
              label="Nhập link trailer"
              variant="outlined"
              type="text"
              fullWidth
            />
          </MDBox>
          <MDBox mb={2}>
            <TextField
              id="outlined-basic"
              label="Tên đạo diễn"
              variant="outlined"
              type="text"
              fullWidth
            />
          </MDBox>
          <MDBox mb={2}>
            <TextField
              id="outlined-basic"
              label="Ngày chiếu phim"
              variant="outlined"
              type="text"
              fullWidth
            />
          </MDBox>
          <MDBox mb={2}>
            <TextField
              id="outlined-basic"
              label="Quốc gia"
              variant="outlined"
              type="text"
              fullWidth
            />
          </MDBox>

          <FormControl sx={{ minWidth: 120, marginBottom: 1 }}>
            <InputLabel id="demo-simple-select-label">Chọn danh mục phim</InputLabel>
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
              <MenuItem value={10}>Hành động</MenuItem>
              <MenuItem value={20}>Tình cảm</MenuItem>
              <MenuItem value={30}>Hài hước</MenuItem>
              <MenuItem value={30}>Hoạt hình</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: 120, marginTop: 1 }}>
            <InputLabel id="demo-simple-select-label">Chọn hình thức</InputLabel>
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
              <MenuItem value={10}>Phim đang chiếu</MenuItem>
              <MenuItem value={20}>Sắp ra mắt </MenuItem>
            </Select>
          </FormControl>
        </MDBox>
      </MDBox>
    </Card>
  );
};

export default AddLeftForm;
