import React, { useEffect, useState } from "react";

import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

import useStyles from "./style";
const ShowMobile = ({ arrayData, value }) => {
  const [data, setData] = useState({ dailyMovieList: [], comingMovieList: [] });
  const [openMore, setopenMore] = useState(false);
  const classes = useStyles({ openMore });
  const history = useHistory();

  useEffect(() => {
    const dailyMovieList = arrayData.dailyMovieList?.slice(0, 3);
    const comingMovieList = arrayData.comingMovieList?.slice(0, 3);
    const dailyMovieListMore = arrayData.dailyMovieList;
    const comingMovieListMore = arrayData.comingMovieList;
    if (!openMore) {
      setData((data) => ({ ...data, dailyMovieList, comingMovieList }));
    }
    if (openMore) {
      setData((data) => ({
        ...data,
        dailyMovieList: dailyMovieListMore,
        comingMovieList: comingMovieListMore,
      }));
    }
  }, [openMore, arrayData]);
  const renderMovie = () => {
    const list = value.value ? data?.comingMovieList : data?.dailyMovieList;
    return list?.map((item) => (
      <div className={classes.movieItem} key={item._id}>
        <div
          className={classes.movieContent}
          onClick={() =>
            history.push(`/film/${item._id}`, { comingMovie: value.value })
          }
        >
          <div
            className={classes.bgImg}
            style={{ backgroundImage: item.images[0].ur }}
          ></div>
          {/* <BlockRating danhGia={item.danhGia} /> */}
          <span className={classes.c18}>C18</span>
        </div>
      </div>
    ));
  };
  return (
    <>
      {renderMovie()}
      <div className={classes.moreMovie}>
        <Button
          variant="outlined"
          onClick={() => setopenMore(true)}
          className={classes.moreMovieButton}
        >
          XEM THÊM
        </Button>
      </div>
    </>
  );
};

export default ShowMobile;
