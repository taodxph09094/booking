import React, { useEffect, useState } from "react";
import { BiUpload } from "react-icons/bi";
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
  clearErrors,
  getCinemaDetails,
  updateCinema,
} from "../../actions/cinemaAction";
import { UPDATE_CINEMA_RESET } from "../../constants/cinemaConstants";

const UpdateCinema = ({ history, match }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { error, cinema } = useSelector((state) => state.cinemaDetails);
  const {
    loading,
    error: updateError,
    isUpdated,
  } = useSelector((state) => state.cinema);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState("");

  const cinemaId = match.params.id;
  useEffect(() => {
    if (cinema && cinema._id !== cinemaId) {
      dispatch(getCinemaDetails(cinemaId));
    } else {
      setName(cinema.name);
      setAddress(cinema.address);
      setImage(cinema.image);
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
      alert.success("Sửa thông tin rạp phim");
      history.push("/admin/cinemas");
      dispatch({ type: UPDATE_CINEMA_RESET });
    }
  }, [
    dispatch,
    alert,
    error,
    history,
    isUpdated,
    cinemaId,
    cinema,
    updateError,
  ]);

  const updateCinemaSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("image", image);
    myForm.set("address", address);

    dispatch(updateCinema(cinemaId, myForm));
  };
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Thêm sản phẩm mới</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form
                  encType="multipart/form-data"
                  onSubmit={updateCinemaSubmitHandler}
                >
                  <Row>
                    <Col className="pr-1" md="12">
                      <Form.Group>
                        <label>Name</label>
                        <Form.Control
                          // defaultValue={name}
                          value={name}
                          //   placeholder="Nhập tiêu đề bài viết"
                          type="text"
                          onChange={(e) => setName(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    {" "}
                    <Col className="pr-1" md="12">
                      <Form.Group>
                        <label>Địa chỉ</label>
                        <Form.Control
                          // defaultValue={name}
                          value={address}
                          //   placeholder="Nhập thể loại bài viết"
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
                          placeholder="Nhập tiêu đề bài viết"
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
                    Sửa thông tin
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

export default UpdateCinema;
