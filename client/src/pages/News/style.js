import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    maxWidth: 940,
    margin: "auto",
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },

  fullImg: {
    width: "100%",
    height: 250,
    borderRadius: 5,
  },

  appBar: {
    backgroundColor: "transparent",
    color: "black",
    boxShadow: "none",
    "& .MuiTabs-indicator": {
      height: 0, // ẩn gạch dưới
    },
  },

  tabButton: {
    opacity: 1,
    color: "#000",
    fontWeight: "600",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    "& > span": {
      transition: "all 0.2s",
      "&:hover": {
        fontSize: "16px",
      },
    },
  },

  tabSelected: {
    color: "#fa5238",
  },

  news: {
    color: "black",
    "&:hover": {
      color: "black",
      textDecoration: "none",
    },
    "& div": {
      "& h4": {
        fontSize: "17px",
        fontWeight: "bold",
      },
      "& p": {
        fontSize: "13px",
      },
    },
  },

  bonusNews: {
    color: "black",
    "&:hover": {
      color: "black",
      textDecoration: "none",
    },
    "& p": {
      fontSize: "13px",
    },
  },
  repons: {
    paddingLeft: 16,
    flex: "0 0 50%",
    maxWidth: "50%",
    [theme.breakpoints.down(579)]: {
      flex: "0 0 100%",
      maxWidth: "100%",
      paddingLeft: 0,
    },
  },

  itemSlider: {
    width: "100%",
    // height: "41vw",
    position: "relative",
  },
  img: {
    width: "100%",
    position: "relative",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundImage: (props) => `url(${props.bannerImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    // filter: "blur(15px)",
    // backgroundLinear: {
    //   position: "relative",
    //   width: "100%",
    //   height: "100%",
    //   background: "linear-gradient(to top,#000,transparent 20%)",
    //   top: "0",
    // },
  },
  Arrow: {
    position: "absolute",
    top: "48%",
    transform: "translateY(-50%)",

    zIndex: 2,
    width: "50px",
    height: "100px",
    color: "#d8d8d8 !important",
    cursor: "pointer",
    transition: "all .2s",
    "&:hover": { color: "#fb4226 !important" },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));
export default useStyle;
