import React, { useState } from "react";
import { Select, Carousel, DatePicker, Button } from "antd";
import { SearchOutlined, RightOutlined, LeftOutlined } from "@ant-design/icons";
import "./banner.css";
const Search = () => {
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
    <div className="formFindFilm">
      <div className="selectFilmAndDate">
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
  );
};

export default Search;
