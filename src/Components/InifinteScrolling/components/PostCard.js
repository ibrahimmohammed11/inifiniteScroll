import React, { Fragment } from "react";

export default function PostCard(props) {
  let { item } = props;
  return (
    <Fragment>
      <div className="col-lg-4 mb-4">
        <div className="card text-center">
          <div>
            <h3>{item.title}</h3>
            <h3>{item.id}</h3>
            <p>{item.body}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
