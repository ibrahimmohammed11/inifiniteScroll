import axios from "axios";
import React, { useEffect, useState, Fragment } from "react";
import Card from "./components/Card";

export default function SeeMore() {
  const [cardData, setCardData] = useState([]);
  const [visible, setVisible] = useState(6);

  const loadMore = () => {
    setVisible(visible + 6);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("https://randomuser.me/api/?results=35");
      setCardData(result.data.results);
    };
    fetchData();
  }, []);
  return (
    <Fragment>
      <div className="container my-5">
        <div className="row">
          {cardData.slice(0, visible).map((card, key) => {
            return <Card card={card} key={key} />;
          })}
        </div>
        <div className="text-center">
          {visible < cardData.length && (
            <button onClick={loadMore} className="btn btn-success">
              Load 5 More
            </button>
          )}
        </div>
      </div>
    </Fragment>
  );
}
