import React, { useEffect, Fragment } from "react";
import { useAlert } from "react-alert";
import { DataGrid } from "@material-ui/data-grid";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  clearErrors,
  deleteCinema,
  getAdminCinema,
} from "../../actions/cinemaAction";
import { DELETE_CINEMA_RESET } from "../../constants/cinemaConstants";
const Cinema = ({ history }) => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const { error, cinemas } = useSelector((state) => state.cinemas);

  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.cinema
  );
  const deleteCinemaHandler = (id) => {
    dispatch(deleteCinema(id));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      alert.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      alert.success("Xóa rạp phim thành công");
      history.push("/admin/cinemas");
      dispatch({ type: DELETE_CINEMA_RESET });
    }

    dispatch(getAdminCinema());
  }, [dispatch, alert, error, deleteError, history, isDeleted]);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      headerAlign: "center",
      flex: 0.5,
      align: "center",
    },
    {
      field: "image",
      headerName: "Hình ảnh",
      flex: 0.5,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "name",
      headerName: "Tên rạp phim",
      flex: 0.5,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "address",
      headerName: "Địa chỉ",
      flex: 0.5,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "actions",
      headerName: "Hành động",
      type: "number",
      flex: 0.5,
      headerAlign: "center",
      align: "center",
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
            <Link
              to={`/admin/updateCinema/${params.getValue(params.id, "id")}`}
            >
              <EditIcon />
            </Link>

            <Button
              onClick={() =>
                deleteCinemaHandler(params.getValue(params.id, "id"))
              }
            >
              <DeleteIcon />
            </Button>
          </Fragment>
        );
      },
    },
  ];

  const rows = [];

  cinemas &&
    cinemas.forEach((item) => {
      rows.push({
        id: item._id,
        image: item.image,
        name: item.name,
        address: item.address,
      });
    });
  return (
    <>
      <h1 id="productListHeading">Danh sách rạp phim đang hoạt động</h1>
      <Link to="/admin/addCinema">
        <h4>
          {" "}
          <AddIcon />
          Thêm địa chỉ rạp phim
        </h4>
      </Link>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        className="productList"
        autoHeight
      />
    </>
  );
};

export default Cinema;
