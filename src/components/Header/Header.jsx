import React, { useState } from "react";
import "./header.css";
import logo from "../../pic/logo (1).png";
import { Link } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { IoNotificationsSharp } from "react-icons/io5";
import { GoThreeBars } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
const Header = () => {
  const [mobile, setMobile] = useState(false);
  return (
    <>
      <header>
        <div className="container">
          <nav className="flexSB">
            <div className="logo">
              <img src={logo} alt=".." />
            </div>
            <ul
              className={mobile ? "nav-list" : "flexSB"}
              onClick={() => setMobile(false)}
            >
              <Link to="/">Home </Link>
              <Link to="/series"> Series </Link>
              <Link to="/movies">Movies </Link>
              <Link to="/pages">Pages </Link>
              <Link to="/pricing">Pricing </Link>
              <Link to="/contact">Contact </Link>
            </ul>

            <button className="toggel" onClick={() => setMobile(!mobile)}>
              {mobile ? <FaTimes /> : <GoThreeBars />}
            </button>
            <div className="acount flexSB">
              <i>
                <BsFillPersonFill style={{ margin: "0px 5px" }} />
              </i>
              <i>
                <IoNotificationsSharp style={{ margin: "0px 5px" }} />
              </i>
              <i>
                <FiSearch style={{ margin: "0px 5px" }} />
              </i>
              <button style={{ margin: "0px 5px" }}>Subscribe Now</button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
