import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Button, Modal } from "antd";
// import classNames from "classnames/bind";
import { OPEN_MODAL } from "../../../constants/ModalTrailer";
import ReactPlayer from "react-player";
// import styles from "./VideoBanner.module.scss";
import "./styel.css";
import { CaretRightOutlined } from "@ant-design/icons";
const play = "/img/carousel/play-video.png";

// const cx = classNames.bind(styles);
BtnPlay.propTypes = {
  urlYoutube: PropTypes.string,
  cssRoot: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

const useStyles = makeStyles({
  button: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",

    zIndex: 1,
    opacity: 0,

    background: "0 0",
    border: "none",

    height: (props) => (props.width ? props.width : 70),
    width: (props) => (props.height ? props.height : 70),
    transition: "all .2s",
  },
  imgPlay: {
    height: "100%",
    width: "100%",
    transition: "all .2s",
    "&:hover": { opacity: 0.7 },
  },
});

export default function BtnPlay({ cssRoot, width, height, urlYoutube }) {
  const classes = useStyles({ width, height });
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const showModal = () => {
  //   setIsModalOpen(true);
  // };
  const handleSetShow = () => {
    setIsModalOpen(!isModalOpen);
  };
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch({
      type: OPEN_MODAL,
      payload: {
        open: true,
        urlYoutube,
      },
    });
  };
  console.log(urlYoutube);
  return (
    <>
      <div className={`${classes.button} ${cssRoot}`}>
        <img
          src={play}
          className={classes.imgPlay}
          onClick={() => openModal()}
          alt="play"
        />
      </div>
      {/* <div className={`${classes.button} ${cssRoot}`}>
        <img
          src={play}
          className={classes.imgPlay}
          onClick={handleSetShow}
          alt="play"
        />

        {isModalOpen && (
          <div className="setTrailer">
            <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
          </div>
        )}
      </div> */}
    </>
  );
}
