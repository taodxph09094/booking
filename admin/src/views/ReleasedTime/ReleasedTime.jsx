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
  deleteReleasedTime,
  getAdminReleasedTime,
} from "../../actions/releasedTimeAction";
import { DELETE_RELEASEDTIME_RESET } from "../../constants/releasedTimeConstants";
import { formatDateTimeToString, splitText } from "../../utils/helper";
const ReleasedTime = ({ history }) => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const { error, releasedTimes } = useSelector((state) => state.releasedTimes);

  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.releasedTime
  );
  const deleteReleasedTimeHandler = (id) => {
    dispatch(deleteReleasedTime(id));
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
      alert.success("Xóa lịch chiếu phim thành công");
      history.push("/admin/releasedTime");
      dispatch({ type: DELETE_RELEASEDTIME_RESET });
    }

    dispatch(getAdminReleasedTime());
  }, [dispatch, alert, error, deleteError, history, isDeleted]);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      headerAlign: "center",
      flex: 0.2,
      align: "center",
    },
    {
      field: "film",
      headerName: "Tên phim",
      flex: 0.5,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "cinema",
      headerName: "Rạp",
      flex: 0.5,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "date",
      headerName: "Ngày chiếu",
      flex: 0.5,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "time",
      headerName: "Thời gian chiếu",
      flex: 0.5,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "price",
      headerName: "Giá",
      flex: 0.5,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "seat",
      headerName: "Ghế",
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
            {/* <Link to={`/admin/updateTime/${params.getValue(params.id, "id")}`}>
              <EditIcon />
            </Link> */}

            <Button
              onClick={() =>
                deleteReleasedTimeHandler(params.getValue(params.id, "id"))
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

  releasedTimes &&
    releasedTimes.forEach((item) => {
      rows.push({
        id: item._id,
        film: item.film,
        cinema: item.cinema,
        date: splitText(formatDateTimeToString(item.date), 10),
        time: item.time,
        price: item.price,
        seat: item.Stock + "/" + 100,
      });
    });
  return (
    <>
      <h1 id="productListHeading">Danh sách lịch chiếu phim</h1>
      <Link to="/admin/addReleasedTime">
        <h4>
          {" "}
          <AddIcon />
          Thêm lịch
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

export default ReleasedTime;
