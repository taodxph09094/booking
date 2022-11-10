import React, { useEffect, useState } from "react";
import { BiUpload } from "react-icons/bi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
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
import { CLEAR_ERRORS, NEW_FILM_RESET } from "../../constants/filmConstants";
import { createFilm } from "../../actions/filmAction";
import { formatDateTimeToString, splitText } from "../../utils/helper";
const AddFilm = ({ history }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { loading, error, success } = useSelector((state) => state.newFilm);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [info, setInfo] = useState("");
  const [type, setType] = useState("");
  const [nation, setNation] = useState("");
  const [director, setDirector] = useState("");
  const [images, setImages] = useState("");
  const [trailer, setTrailer] = useState("");
  // const [imagesPreview, setImagesPreview] = useState([]);
  const [category, setCategory] = useState("");
  const [released, setReleased] = useState("");
  const categories = ["Phim đang chiếu", "Sắp ra mắt "];
  const typeFilm = ["Hành động", "Tình cảm", "Hài hước", "Hoạt hình"];
  const [startDate, setStartDate] = useState(new Date());
  // const setDateTime = () => {

  // }
  useEffect(() => {
    setReleased(splitText(formatDateTimeToString(startDate), 10));
  });
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(CLEAR_ERRORS());
    }

    if (success) {
      alert.success("Thêm rạp phim thành công");
      history.push("/admin/films");
      dispatch({ type: NEW_FILM_RESET });
    }
  }, [dispatch, alert, error, history, success]);
  const createFilmSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("description", description);
    myForm.set("info", info);
    myForm.set("category", category);
    myForm.set("type", type);
    myForm.set("nation", nation);
    myForm.set("director", director);
    myForm.set("released", released);
    myForm.set("images", images);
    myForm.set("trailer", trailer);
    // images.forEach((image) => {
    //   myForm.append("images", image);
    // });
    dispatch(createFilm(myForm));
  };

  // const createFilmImagesChange = (e) => {
  //   const files = Array.from(e.target.files);

  //   setImages([]);
  //   setImagesPreview([]);

  //   files.forEach((file) => {
  //     const reader = new FileReader();

  //     reader.onload = () => {
  //       if (reader.readyState === 2) {
  //         setImagesPreview((old) => [...old, reader.result]);
  //         setImages((old) => [...old, reader.result]);
  //       }
  //     };

  //     reader.readAsDataURL(file);
  //   });
  // };
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Thêm phim</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form
                  encType="multipart/form-data"
                  onSubmit={createFilmSubmitHandler}
                >
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Tên phim</label>
                        <Form.Control
                          // defaultValue={name}
                          value={name}
                          placeholder="Nhập tên phim "
                          type="text"
                          onChange={(e) => setName(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Nhập link ảnh</label>
                        <Form.Control
                          // defaultValue={name}
                          value={images}
                          placeholder="Nhập link ảnh"
                          type="text"
                          onChange={(e) => setImages(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Trailer</label>
                        <Form.Control
                          // defaultValue={name}
                          value={trailer}
                          placeholder="Nhập link trailer "
                          type="text"
                          onChange={(e) => setTrailer(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>Đạo diễn</label>
                        <Form.Control
                          value={director}
                          placeholder="Đạo diễn phim"
                          type="text"
                          onChange={(e) => setDirector(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="4">
                      <label>Ngày chiếu phim</label>

                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                      />
                    </Col>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>Quốc gia</label>
                        <Form.Control
                          value={nation}
                          placeholder="Quốc gia"
                          type="text"
                          onChange={(e) => setNation(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        {/* <label>Danh mục</label> */}
                        {/* <Form.Control
                          value={type}
                          placeholder="Ngày chiếu phim"
                          type="text"
                          onChange={(e) => setType(e.target.value)}
                        ></Form.Control> */}
                        <Form.Select
                          className="select-category"
                          aria-label="Default select example"
                          onChange={(e) => setType(e.target.value)}
                        >
                          <option value="">Chọn danh mục</option>
                          {typeFilm.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        {/* <label>Thể loại</label> */}
                        {/* <Form.Control
                          value={category}
                          placeholder="Ngày chiếu phim"
                          type="text"
                          onChange={(e) => setCategory(e.target.value)}
                        ></Form.Control> */}
                        <Form.Select
                          className="select-category"
                          aria-label="Default select example"
                          onChange={(e) => setCategory(e.target.value)}
                        >
                          <option value="">Chọn thể loại</option>
                          {categories.map((cate) => (
                            <option key={cate} value={cate}>
                              {cate}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Thông tin phim</label>

                        <CKEditor
                          cols="80"
                          //   rows="5"
                          editor={ClassicEditor}
                          data={info}
                          onChange={(event, editor) => {
                            const data = editor.getData();
                            setInfo(data);
                            console.log({ event, editor, data });
                          }}
                          onBlur={(event, editor) => {
                            console.log("Blur.", editor);
                          }}
                          onFocus={(event, editor) => {
                            console.log("Focus.", editor);
                          }}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Mô tả</label>

                        <CKEditor
                          cols="80"
                          rows="5"
                          editor={ClassicEditor}
                          data={description}
                          onChange={(event, editor) => {
                            const data = editor.getData();
                            setDescription(data);
                            console.log({ event, editor, data });
                          }}
                          onBlur={(event, editor) => {
                            console.log("Blur.", editor);
                          }}
                          onFocus={(event, editor) => {
                            console.log("Focus.", editor);
                          }}
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
          {/* <Col md="4">
            <Card className="card-user">
              <div className="card-imageProduct">
                {imagesPreview.map((image, index) => (
                  <img key={index} src={image} alt="Product Preview" />
                ))}
              </div>
              <hr></hr>

              <div className="button-container mr-auto ml-auto">
                <input
                  type="file"
                  name="avatar"
                  className="inputImageProduct"
                  accept="image/*"
                  onChange={createFilmImagesChange}
                  multiple
                />
              </div>
            </Card>
          </Col> */}
        </Row>
      </Container>
    </>
  );
};

export default AddFilm;
