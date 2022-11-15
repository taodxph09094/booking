import React, { useEffect } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import {
  clearErrors,
  getNewFeed,
  getNewFeedDetails,
} from "../../actions/newFeedAction";
import useStyles from "./style";

const NewDetail = ({ match }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const classes = useStyles();
  const { newFeed, error } = useSelector((state) => state.newFeedDetails);
  const { loading, newFeeds } = useSelector((state) => state.newFeeds);
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getNewFeedDetails(match.params.id));
    dispatch(getNewFeed());
  }, [dispatch, match.params.id, error, alert]);
  return (
    <>
      <div className={classes.root} id="tintuc">
        <div key={newFeed._id} className={classes.itemSlider}>
          <img src={newFeed?.image} alt="banner" className={classes.img} />
          <div className={classes.backgroundLinear} />
        </div>
        <div className={classes.content}>
          <h2>{newFeed.title}</h2>
          <p
            dangerouslySetInnerHTML={{
              __html: `${newFeed.content}`,
            }}
          ></p>
        </div>
      </div>
    </>
  );
};

export default NewDetail;
