import React, { useEffect, useState } from "react";
import { BiUpload } from "react-icons/bi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import "./product.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { formatDateTimeToString, splitText } from "../../utils/helper";
import {
  clearErrors,
  getReleasedTimeDetails,
  updateReleasedTime,
} from "../../actions/releasedTimeAction";
import { UPDATE_RELEASEDTIME_RESET } from "../../constants/releasedTimeConstants";
import { getAdminCinema } from "../../actions/cinemaAction";
import { getAdminFilm } from "../../actions/filmAction";
const UpdateReleasedTime = ({ history, match }) => {
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();
  const alert = useAlert();
  const { error, releasedTime } = useSelector(
    (state) => state.releasedTimeDetails
  );
  const {
    loading,
    error: updateError,
    isUpdated,
  } = useSelector((state) => state.releasedTime);
  const [cinema, setCinema] = useState("");
  const [film, setFilm] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const { cinemas } = useSelector((state) => state.cinemas);
  const { films } = useSelector((state) => state.films);
  const cinemaName = [];
  cinemas &&
    cinemas.forEach((item) => {
      cinemaName.push(item.name);
    });
  console.log(cinemaName);
  const filmName = [];
  films &&
    films.forEach((item) => {
      filmName.push(item.name);
    });
  console.log(filmName);
  const [value, onChange] = useState();
  useEffect(() => {
    setDate(splitText(formatDateTimeToString(startDate), 10));
    setTime(value);
  });
  const releasedTimeId = match.params.id;
  useEffect(() => {
    if (releasedTime && releasedTime._id !== releasedTimeId) {
      //   dispatch(getAdminCinema());
      //   dispatch(getAdminFilm());
      dispatch(getReleasedTimeDetails(releasedTimeId));
    } else {
      // setCinema(releasedTime.cinema);
      // setFilm(releasedTime.film);
      setPrice(releasedTime.price);
      setDate(releasedTime.date);
      setTime(releasedTime.time);
    }
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (updateError) {
      alert.error(updateError);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      alert.success("Sửa thông tin lịch phát sóng");
      history.push("/admin/releasedTime");
      dispatch({ type: UPDATE_RELEASEDTIME_RESET });
    }
  }, [
    dispatch,
    alert,
    error,
    history,
    isUpdated,
    // cinemas,
    // films,
    releasedTimeId,
    releasedTime,
    updateError,
  ]);

  const updateReleasedTimeSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    // myForm.set("film", film);
    // myForm.set("cinema", cinema);
    myForm.set("price", price);
    myForm.set("date", date);
    myForm.set("time", time);
    dispatch(updateReleasedTime(releasedTimeId, myForm));
  };
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Chỉnh sửa lịch chiếu phim</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form
                  encType="multipart/form-data"
                  onSubmit={updateReleasedTimeSubmitHandler}
                >
                  {/* <Row>
                    <Col className="pr-1" md="12">
                      <Form.Select
                        className="select-category"
                        aria-label="Default select example"
                        onChange={(e) => setCinema(e.target.value)}
                      >
                        <option value="">Chọn</option>
                        {cinemaName.map((cine) => (
                          <option key={cine} value={cine}>
                            {cine}
                          </option>
                        ))}
                      </Form.Select>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="12">
                      <Form.Select
                        className="select-category"
                        aria-label="Default select example"
                        onChange={(e) => setFilm(e.target.value)}
                      >
                        <option value="">CHọn</option>
                        {filmName.map((film) => (
                          <option key={film} value={film}>
                            {film}
                          </option>
                        ))}
                      </Form.Select>
                    </Col>
                  </Row> */}
                  <Row>
                    <Col className="pr-1" md="12">
                      <Form.Group>
                        <label>Giá vé</label>
                        <Form.Control
                          defaultValue={price}
                          placeholder="Nhập giá vé"
                          type="text"
                          onChange={(e) => setPrice(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <label>Ngày</label>
                      <Form.Group>
                        <DatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                        />
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="6">
                      <label>Thời gian</label>
                      <Form.Group>
                        <TimePicker
                          disableClock
                          onChange={onChange}
                          value={value}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button
                    className="btn-fill pull-right buttonCreate"
                    type="submit"
                    variant="info"
                    disabled={loading ? true : false}
                  >
                    Sửa
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UpdateReleasedTime;
