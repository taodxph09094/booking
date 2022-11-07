import React from "react";
import { useHistory } from "react-router-dom";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { useStyles, ColorlibConnector } from "./style";
import {
  CreditCardOutlined,
  CheckCircleFilled,
  MinusSquareFilled,
} from "@ant-design/icons";
import { useSelector } from "react-redux";

const StepCheckOut = ({ activeStep }) => {
  const history = useHistory();
  const classes = useStyles();
  const { user } = useSelector((state) => state.user);
  const steps = ["CHỌN GHẾ", "THANH TOÁN", "KẾT QUẢ ĐẶT VÉ"];
  function StepIcon(props) {
    const { active, completed } = props;
    const icons = {
      1: <MinusSquareFilled />,
      2: <CreditCardOutlined />,
      3: <CheckCircleFilled />,
    };
    return (
      <div
        className={clsx(classes.stepIcon, {
          [classes.stepIconActive]: active,
          [classes.stepIconCompleted]: completed,
        })}
      >
        {icons[String(props.icon)]}
      </div>
    );
  }
  const handleUser = () => {
    history.push("/taikhoan");
  };
  return (
    <div className={classes.root}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        // activeStep={activeStep}
        className={classes.stepper}
        connector={<ColorlibConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel
              classes={{ label: classes.label }}
              StepIconComponent={StepIcon}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className={classes.account} onClick={handleUser}>
        <img
          src="https://i.pravatar.cc/300?u=$%7BavtIdUser%7D"
          alt="avatar"
          className={classes.avatar}
        />
        <p className={classes.hoTen}>{user?.name}</p>
      </div>
    </div>
  );
};

export default StepCheckOut;
