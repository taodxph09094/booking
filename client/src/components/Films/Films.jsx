import React, { useEffect } from "react";
import { useAlert } from "react-alert";
import { useSelector, useDispatch } from "react-redux";
import { PlayCircleOutlined } from "@ant-design/icons";
import { Link, useHistory } from "react-router-dom";
import { clearErrors, getFilm } from "../../actions/filmAction";
import CardFilm from "./components/CardFilm";
const Films = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, films } = useSelector((state) => state.films);
  console.log(films);
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getFilm());
  }, [dispatch, error, alert]);
  return (
    <>
      <div className="filmLayout">
        {films && films.map((film) => <CardFilm key={film._id} film={film} />)}
        {/* <Space size={10}>

        </Space> */}
      </div>
    </>
  );
};

export default Films;
