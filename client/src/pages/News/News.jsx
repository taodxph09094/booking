import React, { useEffect } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Fade from "@material-ui/core/Fade";
import Seperate from "../../components/Customs/Seperate";
import useStyles from "./style";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getNewFeed } from "../../actions/newFeedAction";
import NewsCard from "./NewsCard";
const News = () => {
  const classes = useStyles();
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, newFeeds } = useSelector((state) => state.newFeeds);
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getNewFeed());
  }, [dispatch, error, alert]);
  //   console.log(newFeeds);
  return (
    <div className={classes.root} id="tintuc">
      <Seperate />
      <div className={classes.content}>
        <div className="row">
          {newFeeds.map((newCard) => {
            return <NewsCard key={newCard._id} newCard={newCard} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default News;
