import React, { useEffect, useState } from "react";
import ChartistGraph from "react-chartist";
import { BiMoviePlay, BiMovie } from "react-icons/bi";
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { Doughnut, Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";

import { formatCurrency } from "../utils/helper";
import { Link } from "react-router-dom";
import Chart from "chart.js/auto";
import { useAlert } from "react-alert";
import { getFilmByDaily, getFilmByComing } from "../actions/filmAction";
import { getReleasedTime } from "../actions/releasedTimeAction";
import { getAllOrders } from "../actions/orderAction";
import { getAllUsers } from "../actions/userAction";
function Dashboard() {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { filmCate } = useSelector((state) => state.filmCate);
  const { filmCom } = useSelector((state) => state.filmCom);
  const { releasedTimes } = useSelector((state) => state.releasedTimes);
  const { orders } = useSelector((state) => state.allOrders);
  const { users } = useSelector((state) => state.allUsers);
  useEffect(() => {
    dispatch(getFilmByDaily());
    dispatch(getFilmByComing());
    dispatch(getReleasedTime());
    dispatch(getAllOrders());
    dispatch(getAllUsers());
  }, [dispatch, alert]);
  console.log(orders & orders);
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      {/* <i className="nc-icon nc-bank text-warning"></i> */}
                      <BiMoviePlay />
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Số phim đang chiếu</p>
                      <Card.Title as="h4">{filmCate.length}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  <Link className="stats" to="/admin/films">
                    Xem danh sách
                  </Link>
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <BiMovie />
                      {/* <i className="nc-icon nc-cart-simple text-success"></i> */}
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Số phim sắp chiếu</p>
                      <Card.Title as="h4">{filmCom.length}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  <Link className="stats" to="/admin/films">
                    Xem danh sách
                  </Link>
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-chart-pie-36 text-danger"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Số lịch chiếu đang có</p>
                      <Card.Title as="h4">{releasedTimes.length}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  <Link className="stats" to="/admin/releasedTime">
                    Xem danh sách
                  </Link>
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-circle-09 text-primary"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">
                        Số tài khoản trên hệ thống
                      </p>
                      <Card.Title as="h4"> {users && users.length}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  <Link className="stats" to="/admin/users">
                    Xem danh sách
                  </Link>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="8">
            <Card className="cardLine">
              <Card.Header>
                <Card.Title as="h4">Biểu đồ doanh thu (đơn vị: $)</Card.Title>
                <p className="card-category">24 Hours performance</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartHours"></div>
              </Card.Body>
              <Card.Footer>
                <div className="legend">
                  <i className="fas fa-circle text-info"></i>
                  Open <i className="fas fa-circle text-danger"></i>
                  Click <i className="fas fa-circle text-warning"></i>
                  Click Second Time
                </div>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-history"></i>
                  Updated 3 minutes ago
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col md="4">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Thống kê hàng hóa</Card.Title>
                <p className="card-category">Hiệu suất bán ra</p>
              </Card.Header>
              <Card.Body>
                <div></div>
                <div className="legend">
                  <i className="fas fa-circle text-info"></i>
                  Open <i className="fas fa-circle text-danger"></i>
                  Bounce <i className="fas fa-circle text-warning"></i>
                  Unsubscribe
                </div>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-clock"></i>
                  Campaign sent 2 days ago
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
