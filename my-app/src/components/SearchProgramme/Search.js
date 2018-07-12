import React from "react";
import "./Search.css";
import { FormGroup, Input } from "reactstrap";
import searchICon from "./search.png";
import exitIcon from "./x.png";

 const Search =(props)=>(
  <FormGroup className="searchInput">
  <img
    src={searchICon}
    onClick={props.handleSubmitByImg}
  />
   <Input
    type="search"
    name="search"
    placeholder="search placeholder"
     onKeyDown={props.handleSubmit}
    onChange={props.handleChange}
    value={props.searchValue}
  />
  <img src={exitIcon} onClick={props.resetSearch} />
</FormGroup>
 )

export default Search;
