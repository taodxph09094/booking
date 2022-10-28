import React, { useEffect, useState } from "react";
import { BiUpload } from "react-icons/bi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
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
  getFilmDetails,
  updateFilm,
} from "../../actions/filmAction";
import { UPDATE_FILM_RESET } from "../../constants/filmConstants";
import { formatDateTimeToString, splitText } from "../../utils/helper";
const UpdateFilm = ({ history, match }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { error, film } = useSelector((state) => state.filmDetails);
  const {
    loading,
    error: updateError,
    isUpdated,
  } = useSelector((state) => state.film);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [info, setInfo] = useState("");
  const [type, setType] = useState("");
  const [nation, setNation] = useState("");
  const [director, setDirector] = useState("");
  const [images, setImages] = useState([]);
  const [oldImages, setOldImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [category, setCategory] = useState("");
  const [released, setReleased] = useState("");
  const categories = ["Phim đang chiếu", "Sắp ra mắt "];
  const typeFilm = ["Hành động", "Tình cảm", "Hài hước", "Hoạt hình"];
  const [startDate, setStartDate] = useState(new Date());

  const filmId = match.params.id;
  useEffect(() => {
    setReleased(splitText(formatDateTimeToString(startDate), 10));
  });
  useEffect(() => {
    if (film && film._id !== filmId) {
      dispatch(getFilmDetails(filmId));
    } else {
      setName(film.name);
      setDescription(film.description);
      setInfo(film.info);
      setType(film.type);
      setNation(film.nation);
      setDirector(film.director);
      setCategory(film.category);
      //   setReleased(film.released);
      setOldImages(film.images);
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
      alert.success("Sửa thông tin phim");
      history.push("/admin/films");
      dispatch({ type: UPDATE_FILM_RESET });
    }
  }, [dispatch, alert, error, history, isUpdated, filmId, film, updateError]);

  const updateFilmSubmitHandler = (e) => {
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
    images.forEach((image) => {
      myForm.append("images", image);
    });

    images.forEach((image) => {
      myForm.append("images", image);
    });
    dispatch(updateFilm(filmId, myForm));
  };
  console.log(released);
  const updateFilmImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);
    setOldImages([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };
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
                  onSubmit={updateFilmSubmitHandler}
                >
                  <Row>
                    <Col className="pr-1" md="12">
                      <Form.Group>
                        <label>Tên phim</label>
                        <Form.Control
                          // defaultValue={name}
                          defaultValue={name}
                          placeholder="Nhập tên phim "
                          type="text"
                          onChange={(e) => setName(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="3">
                      <Form.Group>
                        <label>Đạo diễn</label>
                        <Form.Control
                          defaultValue={director}
                          placeholder="Đạo diễn phim"
                          type="text"
                          onChange={(e) => setDirector(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="3">
                      <Form.Group>
                        <label>Ngày chiếu cũ</label>
                        <Form.Control
                          disabled
                          value={released}
                          placeholder="Quốc gia"
                          type="text"
                          //   onChange={(e) => setNation(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="3">
                      <label>Ngày chiếu phim</label>
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                      />
                    </Col>
                    <Col className="pr-1" md="3">
                      <Form.Group>
                        <label>Quốc gia</label>
                        <Form.Control
                          defaultValue={nation}
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
                          <option value="">{type}</option>
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
                          <option value="">{category}</option>
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
                          //   value={info}
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
                          //   defaultValue={description}
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
                    Sửa thông tin
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-user">
              <label>Ảnh cũ</label>
              <div className="card-imageProduct">
                {oldImages &&
                  oldImages.map((image, index) => (
                    <img
                      className="oldImagesProduct"
                      key={index}
                      src={image.url}
                      alt="Old Product Preview"
                    />
                  ))}
              </div>
            </Card>
            <Card className="card-user">
              <label>Ảnh mới</label>
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
                  onChange={updateFilmImagesChange}
                  multiple
                />
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UpdateFilm;