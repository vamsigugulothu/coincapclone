import React from "react";
import black from "../images/black.svg";

const Header = () => {
    return (
        <div className={""} style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "stretch",
            position: "fixed",
            top: 0,
            backgroundColor: "white",
            boxShadow: "0 1px 2px 0 rgba(34,36,38,.15)",
            width: "100%",
            height: "60px"
        }}>
            <img src={black} />
        </div>
    );
}

export default Header;

// display: flex;
//   justify-content: center;
//   align-items: stretch;
//   position: fixed;
//   top: 0;
//   background-color: white;
//   box-shadow: 0 1px 2px 0 rgba(34,36,38,.15);
//   width: 100%;
//   height: 60px;