import React from "react";
import { splitText } from "../../utils/helper";
import useStyles from "./style";
const NewsCard = ({ newCard }) => {
  const classes = useStyles({
    bannerImg: newCard.image,
  });
  console.log(newCard);
  return (
    <div className={classes.repons}>
      <a href={`/new/${newCard._id}`} className={classes.news}>
        <img className={classes.fullImg} alt="news-movie" />
        <div className="py-3">
          <h4 className="card-title">{splitText(newCard.title, 45) + "..."}</h4>
          <p
            className="text-secondary"
            dangerouslySetInnerHTML={{
              __html: `${splitText(newCard.content, 200) + "..."}`,
            }}
          ></p>
        </div>
      </a>
    </div>
  );
};

export default NewsCard;
