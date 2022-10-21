import React, { useState } from "react";
import "./banner.css";
import { Select, Carousel, DatePicker, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const Banner = () => {
  const { Option } = Select;
  const provinceData = [
    "Black Adam",
    "Cô gái từ quá khứ",
    "Bỗng dưng trúng số",
  ];
  const cityData = {
    "Black Adam": ["Hà Nội", "Hồ Chí Minh", "Đà Nẵng"],
    "Cô gái từ quá khứ": ["Hà Nội", "Suzhou", "Zhenjiang"],
    "Bỗng dưng trúng số": ["Không có"],
  };
  const [cities, setCities] = useState(cityData[provinceData[0]]);
  const [secondCity, setSecondCity] = useState(cityData[provinceData[0]][0]);
  const handleProvinceChange = (value) => {
    setCities(cityData[value]);
    setSecondCity(cityData[value][0]);
  };
  const onSecondCityChange = (value) => {
    setSecondCity(value);
  };
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <>
      <div className="bannerFilm">
        <Carousel autoplay>
          <div>
            <h3 className="bannerStyle">1</h3>
          </div>
          <div>
            <h3 className="bannerStyle">2</h3>
          </div>
          <div>
            <h3 className="bannerStyle">3</h3>
          </div>
          <div>
            <h3 className="bannerStyle">4</h3>
          </div>
        </Carousel>
        <div className="formFindFilm">
          <div className="selectFilmAndDate">
            <p className="selectAndFilter">Filter</p>
            <Select
              defaultValue={provinceData[0]}
              style={{
                width: 350,
              }}
              onChange={handleProvinceChange}
            >
              {provinceData.map((province) => (
                <Option key={province}>{province}</Option>
              ))}
            </Select>
            <Select
              style={{
                width: 120,
              }}
              value={secondCity}
              onChange={onSecondCityChange}
            >
              {cities.map((city) => (
                <Option key={city}>{city}</Option>
              ))}
            </Select>
            <DatePicker onChange={onChange} />
            <Button type="primary" icon={<SearchOutlined />}>
              Tìm kiếm
            </Button>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
