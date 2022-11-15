import React from "react";
import ReactDOM from "react-dom";
import { Bar } from "react-chartjs-2";
import { getAllOrders } from "../../actions/orderAction";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";

const ChartTable = ({ orderList }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  console.log(orderList);

  const data = {
    labels: [orderList.length],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        //stack: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      //   {
      //     label: "My second dataset",
      //     backgroundColor: "rgba(155,231,91,0.2)",
      //     borderColor: "rgba(255,99,132,1)",
      //     borderWidth: 1,
      //     //stack: 1,
      //     hoverBackgroundColor: "rgba(255,99,132,0.4)",
      //     hoverBorderColor: "rgba(255,99,132,1)",
      //     data: [45, 79, 50, 41, 16, 85, 20],
      //   },
      //   {
      //     label: "test 3",
      //     backgroundColor: "rgba(157,241,191,0.2)",
      //     borderColor: "rgba(255,99,132,1)",
      //     borderWidth: 1,
      //     //stack: 1,
      //     hoverBackgroundColor: "rgba(255,99,132,0.4)",
      //     hoverBorderColor: "rgba(255,99,132,1)",
      //     data: [1, 1, 1, 2, 4, 54, 7],
      //   },
    ],
  };
  const options = {
    responsive: true,
    legend: {
      display: false,
    },
    type: "bar",
    //   scales: {
    //     xAxes: [{
    //         stacked: true
    //     }],
    //     yAxes: [{
    //         stacked: true
    //     }]
    // }
  };
  return <Bar data={data} width={null} height={null} options={options} />;
};

export default ChartTable;
