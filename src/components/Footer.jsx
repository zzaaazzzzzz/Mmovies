import React from "react";
import { BsInstagram, BsFacebook, BsGithub, BsTwitter } from "react-icons/bs";
import google from "../pic/image/google-play.png";
import app from "../pic/image/apple-app-store--v3.png";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="first">
          <ul>
            <li>Terms of Use</li>
            <li> Privacy-Policy </li>
            <li>Blog </li>
            <li>FAQ</li>
            <li>Watch List</li>
          </ul>
          <p>
            © 2022 STREAMIT. All Rights Reserved. All videos and shows on this
            platform are trademarks of, and all related images and content are
            the property of, Streamit Inc. Duplication and copy of this is
            strictly prohibited. All rights reserved.
          </p>
        </div>
        <div>
          <h3>follow Us</h3>
          <div className="icon">
            <BsInstagram style={{ margin: "10px" }} />
            <BsFacebook style={{ margin: "10px" }} />
            <BsGithub style={{ margin: "10px" }} />
            <BsTwitter style={{ margin: "10px" }} />
          </div>
        </div>
        <div className="second">
          <h3>Streamit App</h3>
          <img src={google} alt="." style={{ marginTop: "20px" }} /> google play
          <br />
          <img src={app} alt="." />
          App store
        </div>
      </div>
    </>
  );
};

export default Footer;
