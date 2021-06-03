import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Popover, Tooltip, Button, Avatar } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Form, FormControl, Col } from "react-bootstrap";
import "./header.css";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { PoweroffOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";

// npm i antd @types/antd @ant-design/icons mdb-react-ui-kit react-bootstrap

export default function Header() {
  const [showBasic, setShowBasic] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const state: any = useSelector((state:any) => state.user);
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("userId");

    dispatch({
      type: "LOGOUT",
      payload:"",
    });
    history.push("/");
  };

  const content = (
    <div>
      <p>
        <Link className="link-tag" to="/myQuestions">
          My Questions
        </Link>
      </p>

      <p>
        <Link className="link-tag" to="/myAnswers">
          My Answers
        </Link>
      </p>

      <p>
        <Link className="link-tag" to="/myLikedQuestions">
          My Liked Questions
        </Link>
      </p>
      <p>
        <Link className="link-tag" to="/myLikedAnswers">
          My Liked Answers
        </Link>
      </p>

      <PoweroffOutlined
        onClick={logout}
        title="Logout"
        style={{
          fontSize: "15px",
          color: "red",
          cursor: "pointer",
        }}
      />
    </div>
  );

  let [searchText, setsearchText] = useState({
    searchText: "",
  });

  const setCategoryValue = (e: any) => {
    let value: any = e.target?.value;

    dispatch({ type: "SEARCH_PARAMS", payload: value });
  };

  const setValue = (e: any) => {
    let name: any = e.target?.name;
    let value: any = e.target?.value;
    if (value.length > 0) {
      console.log(name, value, searchText);
      setsearchText((prevState: any) => ({ ...prevState, [name]: value }));
    } else {
      console.log("enter all values");
    }
  };
  return (
    <div>
      <MDBNavbar sticky={true} expand="lg" light bgColor="white">
        <MDBContainer fluid >
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-3">
                <MDBNavbarBrand>
                  <Link className="link-tag" to="/home">
                    Skill Media
                  </Link>
                </MDBNavbarBrand>
              </div>
              <div className="col-sm-6">
               {/*  <MDBCollapse navbar show={showBasic}> */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: " 80% 20%",
                    }}
                  >
                    <FormControl
                      type="text"
                      placeholder="Search"
                      className="mr-sm-1 search-input"
                      onChange={setValue}
                    />
                    <Tooltip title="search">
                      <Button
                        shape="circle"
                        className="search-button"
                        icon={<SearchOutlined style={{color:"white"}}/>}
                      />
                    </Tooltip>
                  </div>
                {/* </MDBCollapse> */}
              </div>
              <div className="col-sm-3">
               {/*  <MDBCollapse> */}
                  {state.loggedInUser && (
                    <Popover
                      content={content}
                      title={state.user}
                      trigger="click"
                    >
                      <Avatar
                        src="https://eshendetesia.com/images/user-profile.png"
                        style={{ float: "right", cursor: "pointer" }}
                      />
                    </Popover>
                  )}
                {/* </MDBCollapse> */}
              </div>
            </div>
          </div>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}

{
  /* <Form.Group as={Col} controlId="formGridState">
<Form.Control
  name="category"
  as="select"
  defaultValue="Choose..."
  onChange={setCategoryValue}
  style={{ width: "100px" }}
>
  <option value="">Category...</option>
  <option value="Javascript">Javascript</option>
  <option value="React">React</option>
  <option value="Nodejs">Nodejs</option>
  <option value="Express">Express</option>
  <option value="HTML">HTML</option>
  <option value="CSS">CSS</option>
  <option value="MongoDb">MongoDb</option>
</Form.Control>
</Form.Group> */
}
