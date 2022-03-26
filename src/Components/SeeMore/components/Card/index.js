import React, { Fragment } from "react";

export default function Card(props) {
  let { card } = props;
  return (
    <Fragment>
      <div className="col-lg-4 mb-4">
        <div className="card text-center">
          <img src={card.picture.large} className="w-100" alt="img1" />
          <div>
            <h5>
              {card.name.first} {card.name.last}
            </h5>
            <ul>
              <li>{card.email}</li>
              <li>{card.cell}</li>
              <li>{card.gender}</li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
