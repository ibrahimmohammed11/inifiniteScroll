import React, { Fragment } from "react";

export default function PhotoCard(props) {
  let { item } = props;
  return (
    <Fragment>
      <div className="col-lg-4 mb-4">
        <div className="card text-center">
          <img src={item.url} className="w-100" alt="img1" />
          <div>
            <h3>{item.title}</h3>
            <h3>{item.id}</h3>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
