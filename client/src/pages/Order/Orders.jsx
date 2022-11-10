import React, { useEffect } from "react";
import { Space, Table, Tag } from "antd";
import AppBar from "@material-ui/core/AppBar";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "@material-ui/core/styles";
import useStyles from "./style";
import { underLine } from "../../utils/bonusStyle";
import { clearErrors, myOrders } from "../../actions/orderAction";
const Orders = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, orders } = useSelector((state) => state.myOrders);
  const { user } = useSelector((state) => state.user);
  const theme = useTheme();
  const classes = useStyles({ underLine });
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Họ tên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Tên phim",
      dataIndex: "film",
      key: "film",
    },
    {
      title: "Rạp",
      dataIndex: "cinema",
      key: "cinema",
    },
    {
      title: "Tổng tiền",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Trạng thái đơn",
      dataIndex: "status",
      key: "status",
    },
    // {
    //   title: "Action",
    //   key: "action",
    //   render: (_, record) => (
    //     <Space size="middle">
    //       <a>Xóa</a>
    //     </Space>
    //   ),
    // },
  ];
  const data = [];
  orders &&
    orders.forEach((item, index) => {
      data.push({
        //   itemsQty: item.orderItems.length,
        id: item._id,
        name: item.userName,
        film: item.nameFilm,
        cinema: item.nameCinema,
        status: item.orderStatus,
        price: item.totalPrice,
      });
    });
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(myOrders());
  }, [dispatch, alert, error]);
  console.log(data);
  return (
    <div id="cumrap">
      <div className={classes.theater}>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default Orders;
