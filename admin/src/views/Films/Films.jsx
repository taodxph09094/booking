import React, { useEffect, Fragment } from "react";
import { useAlert } from "react-alert";
import { DataGrid } from "@material-ui/data-grid";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import {
  clearErrors,
  deleteFilm,
  getAdminFilm,
} from "../../actions/filmAction";
import { DELETE_FILM_RESET } from "../../constants/filmConstants";
const Films = ({ history }) => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const { error, films } = useSelector((state) => state.films);

  const { error: deleteError, isDeleted } = useSelector((state) => state.film);
  const deleteFilmHandler = (id) => {
    dispatch(deleteFilm(id));
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
      history.push("/admin/films");
      dispatch({ type: DELETE_FILM_RESET });
    }

    dispatch(getAdminFilm());
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
      field: "name",
      headerName: "Tên phim",
      headerAlign: "center",
      flex: 0.5,
      align: "center",
    },
    {
      field: "released",
      headerName: "Ngày chiếu",
      flex: 0.5,
      headerAlign: "center",
      align: "center",
    },

    {
      field: "type",
      headerName: "Thể loại",
      flex: 0.5,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "category",
      headerName: "Danh mục",
      flex: 0.5,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "status",
      headerName: "Trạng thái",
      flex: 0.5,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        // console.log(params);
        return (
          <Fragment>
            {params.value === "hiện" ? (
              <AiFillEye style={{ fontSize: 24 }} />
            ) : (
              <AiFillEyeInvisible style={{ fontSize: 24, color: "red" }} />
            )}
          </Fragment>
        );
      },
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
            <Link to={`/admin/updateFilm/${params.getValue(params.id, "id")}`}>
              <EditIcon />
            </Link>

            <Button
              onClick={() =>
                deleteFilmHandler(params.getValue(params.id, "id"))
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
  const show = () => {
    return (
      <>
        <div>đang Hiện</div>
      </>
    );
  };
  films &&
    films.forEach((item) => {
      rows.push({
        id: item._id,
        name: item.name,
        released: item.released,
        status: item.hideFilm,
        type: item.type,
        category: item.category,
      });
    });
  return (
    <>
      <h1 id="productListHeading">Danh sách phim đang hoạt động</h1>
      <Link to="/admin/addFilm">
        <h4>
          {" "}
          <AddIcon />
          Thêm phim
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

export default Films;
