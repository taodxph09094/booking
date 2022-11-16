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
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import { useNavigate } from "react-router-dom";
// Billing page components
import Bonus from "../Bonus";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { date } from "yup";
const AddRightForm = () => {
  let navigate = useNavigate();
  const onPressBack = () => {
    navigate("/admin/movies");
  };
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={3} px={2}>
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
            {new Date().getDate() + "-" + new Date().getMonth() + "-" + new Date().getFullYear()}
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox px={2}>
        <MDTypography variant="caption" color="text" fontWeight="bold" textTransform="uppercase">
          Nhập thông tin phim
        </MDTypography>
        <MDBox mb={2}>
          <CKEditor
            cols="80"
            //   rows="5"
            editor={ClassicEditor}
            // data={data}
            onChange={(event, editor) => {
              const data = editor.getData();
              setInfo(data);
              console.log({ event, editor, data });
            }}
            onBlur={(event, editor) => {
              console.log("Blur.", editor);
            }}
            onFocus={(event, editor) => {
              console.log("Focus.", editor);
            }}
          />
        </MDBox>
        <MDTypography variant="caption" color="text" fontWeight="bold" textTransform="uppercase">
          Nhập mô tả phim
        </MDTypography>
        <MDBox mb={2}>
          <CKEditor
            cols="80"
            //   rows="5"
            editor={ClassicEditor}
            // data={data}
            onChange={(event, editor) => {
              const data = editor.getData();
              setInfo(data);
              console.log({ event, editor, data });
            }}
            onBlur={(event, editor) => {
              console.log("Blur.", editor);
            }}
            onFocus={(event, editor) => {
              console.log("Focus.", editor);
            }}
          />
        </MDBox>
        <MDBox mt={4} mb={1}>
          <MDButton variant="gradient" color="info" fullWidth>
            Thêm phim
          </MDButton>
        </MDBox>
        <MDBox mt={3} mb={1}>
          <MDButton onClick={onPressBack} variant="outlined" color="info" fullWidth>
            Quay lại
          </MDButton>
        </MDBox>
      </MDBox>
    </Card>
  );
};

export default AddRightForm;
