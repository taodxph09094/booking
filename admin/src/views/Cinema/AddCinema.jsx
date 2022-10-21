import React, { useEffect, useState } from "react";
import { BiUpload } from "react-icons/bi";
// react-bootstrap components
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
  NEW_CINEMA_RESET,
} from "../../constants/cinemaConstants";
import { createCinema } from "../../actions/cinemaAction";
const AddCinema = ({ history }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { loading, error, success } = useSelector((state) => state.newCinema);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(CLEAR_ERRORS());
    }

    if (success) {
      alert.success("Thêm rạp phim thành công");
      history.push("/admin/cinemas");
      dispatch({ type: NEW_CINEMA_RESET });
    }
  }, [dispatch, alert, error, history, success]);

  const addCinemaSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("address", address);
    myForm.set("image", image);
    dispatch(createCinema(myForm));
  };
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Thêm địa chỉ rạp phim</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form
                  encType="multipart/form-data"
                  onSubmit={addCinemaSubmitHandler}
                >
                  <Row>
                    <Col className="pr-1" md="12">
                      <Form.Group>
                        <label>Tên rạp</label>
                        <Form.Control
                          // defaultValue={name}
                          value={name}
                          placeholder="Nhập tên rạp phim "
                          type="text"
                          onChange={(e) => setName(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="12">
                      <Form.Group>
                        <label>Địa chỉ</label>
                        <Form.Control
                          // defaultValue={name}
                          value={address}
                          placeholder="Nhập địa chỉ rạp phim"
                          type="text"
                          onChange={(e) => setAddress(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="12">
                      <Form.Group>
                        <label>Ảnh</label>
                        <Form.Control
                          // defaultValue={name}
                          value={image}
                          placeholder="Nhập link ảnh rạp phim"
                          type="text"
                          onChange={(e) => setImage(e.target.value)}
                        ></Form.Control>
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

export default AddCinema;
