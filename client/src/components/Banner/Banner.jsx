import React, { useState } from "react";
import "./banner.css";
import { AutoComplete, Carousel, Cascader } from "antd";

const Banner = () => {
  //   const mockVal = (str, repeat = 1) => ({
  //     value: str.repeat(repeat),
  //   });

  //   const [value, setValue] = useState("");
  //   const [options, setOptions] = useState([]);
  //   const onSearch = (searchText) => {
  //     setOptions(
  //       !searchText
  //         ? []
  //         : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)]
  //     );
  //   };
  //   const onSelect = (data) => {
  //     console.log("onSelect", data);
  //   };
  //   const onChange = (data) => {
  //     setValue(data);
  //   };
  const options = [
    {
      value: "zhejiang",
      label: "Zhejiang",
      children: [
        {
          value: "hangzhou",
          label: "Hangzhou",
        },
      ],
    },
    {
      value: "jiangsu",
      label: "Jiangsu",
      children: [
        {
          value: "nanjing",
          label: "Nanjing",
        },
      ],
    },
  ];
  const onChange = (value, selectedOptions) => {
    console.log(value, selectedOptions);
  };
  const filter = (inputValue, path) =>
    path.some(
      (option) =>
        option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
    );
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
            {/* <AutoComplete
              options={options}
              style={{
                width: 200,
              }}
              onSelect={onSelect}
              onSearch={onSearch}
              placeholder="input here"
            /> */}
            <Cascader
              options={options}
              onChange={onChange}
              placeholder="Please select"
              showSearch={{
                filter,
              }}
              onSearch={(value) => console.log(value)}
            />
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
