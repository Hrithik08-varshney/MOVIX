import React from "react";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import "./style.scss";
import { listArr, iconArr } from "../../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          {listArr &&
            listArr.length &&
            Array.isArray(listArr) &&
            listArr?.map((item, key) => {
              return (
                <li key={key + item} className="menuItem">
                  {item}
                </li>
              );
            })}
        </ul>
        <div className="socialIcons">
          {iconArr &&
            iconArr.length &&
            Array.isArray(iconArr) &&
            iconArr?.map((item, key) => {
              return (
                <span key={key + "comp" + item.comp} className="icon">
                  {item.comp}
                </span>
              );
            })}
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
