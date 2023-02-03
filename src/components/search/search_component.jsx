import React, { useEffect, useState } from "react";
import SearchIcon from "../../svgImage/search_icon";
import "../_component.scss";
import dataDetail from "./data/data_detail";

function SearchComponent({
  width = "100%",
  data,
  setDocumentData,
  searchValue,
  searchText,
  setSearchText,
}) {
  const [documentData] = useState(data);
  // const [searchShow, setSearchShow] = useState(false);
  // const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (searchText.length >= 2) {
      const result = documentData.filter((item) => {
        // console.log("X--", item);
        // return true
        //เสริชด้วย name เสริชได้ทั้งตัว พิมพ์เล็กพิมพ์ใหญ่
        return item[searchValue].toLowerCase().includes(searchText.toLowerCase());
      });

      console.log(searchText);
      setDocumentData(result);
    } else if (searchText === "") {
      setDocumentData([]);
    }
  }, [searchValue, searchText]);

  const handleChange = (e) => {
    setSearchText(e.target.value);
    if (e.target.value.lenght >= 2) {
      // setSearchShow(false)
    } else {
      // setSearchShow(true);
    }
  };

  return (
    <div style={{ width }} className="component_search_container">
      <input
        type="search"
        placeholder="Search Now!!"
        onChange={handleChange}
        value={searchText}
        className="component_search_input_box"
      />
      <div></div>

      <div className="component_search_icon_container">
        <SearchIcon details={dataDetail} />
      </div>
      {/* {searchList()} */}
    </div>
  );
}

export default SearchComponent;
