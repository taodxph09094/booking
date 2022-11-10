import React, { useEffect, Fragment } from "react";
import { useAlert } from "react-alert";
import { DataGrid } from "@material-ui/data-grid";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { DELETE_BANNER_RESET } from "../../constants/bannerConstants";
import { clearErrors, getAdminBanner } from "../../actions/bannerAction";

const Banner = ({ history }) => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const { error, banners } = useSelector((state) => state.banners);

  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.banner
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
      history.push("/admin/banners");
      dispatch({ type: DELETE_BANNER_RESET });
    }

    dispatch(getAdminBanner());
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
      field: "imageBanner",
      headerName: "Banner chính",
      flex: 0.5,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "bannerBonusLeft",
      headerName: "Banner phụ 1",
      flex: 0.5,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "bannerBonusRight",
      headerName: "Banner phụ 2",
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
            //   to={`/admin/updateCinema/${params.getValue(params.id, "id")}`}
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

  banners &&
    banners.forEach((item) => {
      rows.push({
        id: item._id,
        imageBanner: item.imageBanner,
        bannerBonusLeft: item.bannerBonusLeft,
        bannerBonusRight: item.bannerBonusRight,
      });
    });
  return (
    <>
      <h1 id="productListHeading">Danh sách banner</h1>
      <Link to="/admin/addBanner">
        <h4>
          {" "}
          <AddIcon />
          Thêm banner
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

export default Banner;
