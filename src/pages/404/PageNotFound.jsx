import React from "react";
import "./style.scss";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import {explainArr} from "../../constants"
const PageNotFound = () => {
  return (
    <div className="pageNotFound">
      <ContentWrapper>
        <span className="bigText">404</span>
        <span className="smallText">Page not found!</span>
        <br/>
        {explainArr?.map((item, key) => {
          return (
            <>
              <span key={item + key} className="verySmallText">
                {item}
              </span>
              <br />
            </>
          );
        })}
      </ContentWrapper>
    </div>
  );
};

export default PageNotFound;
