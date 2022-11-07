import React, { useEffect, useState } from "react";
import { BiUpload } from "react-icons/bi";
import Select from "react-select";
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
import {
  CLEAR_ERRORS,
  NEW_RELEASEDTIME_RESET,
} from "../../constants/releasedTimeConstants";
import { createReleasedTime } from "../../actions/releasedTimeAction";
import { getAdminCinema } from "../../actions/cinemaAction";
import { getAdminFilm } from "../../actions/filmAction";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { formatDateTimeToString, splitText } from "../../utils/helper";

const brands = ["BHD", "Lotte", "CGV", "Galaxy"];
const NewReleasedTime = ({ history }) => {
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();
  const alert = useAlert();

  const { loading, error, success } = useSelector(
    (state) => state.newReleasedTime
  );
  const [cinema, setCinema] = useState("");
  const [film, setFilm] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [brand, setBrand] = useState("");
  const { cinemas } = useSelector((state) => state.cinemas);
  const { films } = useSelector((state) => state.films);
  const cinemaName = [];
  cinemas &&
    cinemas.forEach((item) => {
      cinemaName.push(item.name);
    });
  const filmName = [];
  films &&
    films.forEach((item) => {
      filmName.push(item.name);
    });

  useEffect(() => {
    // setDate(splitText(formatDateTimeToString(startDate), 10));
    setDate(startDate);
    setTime(value);
  });
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(CLEAR_ERRORS());
    }

    if (success) {
      alert.success("Thêm lịch chiếu thành công");
      history.push("/admin/releasedTime");
      dispatch({ type: NEW_RELEASEDTIME_RESET });
    }
    dispatch(getAdminCinema());
    dispatch(getAdminFilm());
  }, [dispatch, alert, error, history, success]);

  const addReleasedTimeSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("film", film);
    myForm.set("cinema", cinema);
    myForm.set("brand", brand);
    myForm.set("price", price);
    myForm.set("date", date);
    myForm.set("time", time);
    dispatch(createReleasedTime(myForm));
  };
  const [value, onChange] = useState("10:00");
  return (
    <>
      {/* <Select options={options} /> */}
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Thêm lịch chiếu phim</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form
                  encType="multipart/form-data"
                  onSubmit={addReleasedTimeSubmitHandler}
                >
                  <Row>
                    <Col className="pr-1" md="12">
                      <Form.Select
                        className="select-category"
                        aria-label="Default select example"
                        onChange={(e) => setBrand(e.target.value)}
                      >
                        <option value="">Chọn rạp</option>
                        {brands.map((cineV) => (
                          <option key={cineV} value={cineV}>
                            {cineV}
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
                        onChange={(e) => setCinema(e.target.value)}
                      >
                        <option value="">Chọn cụm rạp</option>
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
                        <option value="">Chọn phim</option>
                        {filmName.map((film) => (
                          <option key={film} value={film}>
                            {film}
                          </option>
                        ))}
                      </Form.Select>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="12">
                      <Form.Group>
                        <label>Giá vé</label>
                        <Form.Control
                          // defaultValue={name}
                          // value={price}
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
                    Thêm
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

export default NewReleasedTime;
