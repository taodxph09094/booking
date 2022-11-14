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
  NEW_BANNER_RESET,
} from "../../constants/bannerConstants";
import { clearErrors, createBanner } from "../../actions/bannerAction";
const AddBanner = ({ history }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { loading, error, success } = useSelector((state) => state.newBanner);
  const [imageBanner, setImageBanner] = useState("");
  const [bannerBonusLeft, setBannerBonusLeft] = useState("");
  const [bannerBonusRight, setBannerBonusRight] = useState("");
  const [trailer, setTrailer] = useState("");

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Thêm banner thành công");
      history.push("/admin/banners");
      dispatch({ type: NEW_BANNER_RESET });
    }
  }, [dispatch, alert, error, history, success]);

  const addCinemaSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("imageBanner", imageBanner);
    myForm.set("bannerBonusLeft", bannerBonusLeft);
    myForm.set("bannerBonusRight", bannerBonusRight);
    myForm.set("trailer", trailer);
    dispatch(createBanner(myForm));
  };
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Thêm banner</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form
                  encType="multipart/form-data"
                  onSubmit={addCinemaSubmitHandler}
                >
                  <Row>
                    <Col className="pr-1" md="12">
                      <Form.Group>
                        <label>Banner chính</label>
                        <Form.Control
                          // defaultValue={name}
                          value={imageBanner}
                          placeholder="Nhập link ảnh"
                          type="text"
                          onChange={(e) => setImageBanner(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="12">
                      <Form.Group>
                        <label>Banner phụ 1</label>
                        <Form.Control
                          // defaultValue={name}
                          value={bannerBonusLeft}
                          placeholder="Nhập địa chỉ rạp phim"
                          type="text"
                          onChange={(e) => setBannerBonusLeft(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="12">
                      <Form.Group>
                        <label>Banner phụ 2</label>
                        <Form.Control
                          // defaultValue={name}
                          value={bannerBonusRight}
                          placeholder="Nhập link ảnh rạp phim"
                          type="text"
                          onChange={(e) => setBannerBonusRight(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="12">
                      <Form.Group>
                        <label>Trailer</label>
                        <Form.Control
                          // defaultValue={name}
                          value={trailer}
                          placeholder="Nhập link trailer"
                          type="text"
                          onChange={(e) => setTrailer(e.target.value)}
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

export default AddBanner;
