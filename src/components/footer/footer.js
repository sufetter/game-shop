import React from "react";
import {BsTelegram} from "react-icons/bs";
import {AiFillTwitterCircle} from "react-icons/ai";
import {BsFacebook} from "react-icons/bs";
import "./footer.css";

export function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <div className="footer-link__facebook">
            <BsFacebook size={35} />
          </div>
          <div className="footer-link__telegram">
            <BsTelegram size={35} />
          </div>
          <div className="footer-link__twitter">
            <AiFillTwitterCircle size={40} />
          </div>
        </div>
        <div className="footer-text">
          © 2022,Hiks Store, Inc. Все права сохранены.
        </div>
      </div>
    </div>
  );
}
