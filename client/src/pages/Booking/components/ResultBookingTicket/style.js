import { makeStyles } from "@material-ui/core";
import { underLineDashed } from "../bonusStyle";

const useStyles = makeStyles({
  resultBookticket: {
    textAlign: "left",
    lineHeight: "30px",
    padding: (props) => (props.isMobile ? 23 : 40),
    width: "100%",
  },
  infoTicked: {
    display: "flex",
    gap: "5%",
  },
  infoTicked__img: (props) => ({
    flex: "30%",
    backgroundImage: `url(${props.poster})`,
    borderRadius: "4px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }),

  infoTicked__txt: {
    flex: "70%",
  },
  tenPhim: {
    fontSize: 19,
    ...underLineDashed,
  },
  text__first: (props) => ({
    color: `${props.color}`,
    fontWeight: "500",
  }),
  text__second: {
    color: "#000",
    fontWeight: "500",
  },
  diaChi: {
    color: "#9B9B9B",
  },
  table: {
    marginTop: 10,
    width: "100%",
  },
  infoResult_label: {
    margin: "30px 0px 10px",
    fontWeight: 400,
  },
  paymentColor: {
    color: "#f79320",
  },
  errorColor: {
    color: "#fb4226",
  },
  noteresult: {
    fontStyle: "italic",
    fontWeight: 500,
  },
  spaceEvenly: {
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    paddingBottom: 30,
  },
  btnResult: {
    color: "#fff",
    padding: "6px 17px",
    borderRadius: "20px",
    backgroundImage: "linear-gradient(223deg,#b4ec51 0,#429321 100%)",
    "&:hover": {
      color: "#fff",
      backgroundImage: "linear-gradient(223deg,#5d9004 0,#1f5f04 100%)",
    },
  },

  txtClick: {
    color: "#f79320",
    cursor: "pointer",
    "&:hover": {
      color: "#0056b3",
      textDecoration: "initial",
    },
  },
});
export default useStyles;
