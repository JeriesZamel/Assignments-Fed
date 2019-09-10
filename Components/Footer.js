import React from "react";
const footer = {
  backgroundColor: "#D0D3D4",
  borderTop: "1px solid #00F0FF",
  height: "30px",
  marginTop: "-30px",
  padding: "5px 0",
  width: "100%",
  position: "relative"
};
export default () => {
  return (
    <>
      <div className="position-sticky w-100 mb-0" style={{ footer }}>
        <div className="alert alert-secondary m-0 p-2" role="alert">
          <small className="text-center">
            <p className="m-auto">All Rights Reserved</p>
          </small>
        </div>
      </div>
    </>
  );
};
