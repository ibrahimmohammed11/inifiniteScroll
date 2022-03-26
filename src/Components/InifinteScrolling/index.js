import axios from "axios";
import React, { useEffect, useState, Fragment } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./components/Loader";
import EndMsg from "./components/EndMsg";
import PhotoCard from "./components/PhotoCard";
import PostCard from "./components/PostCard";

export default function InifinteScrolling() {
  const [items, setItems] = useState([]);
  const [hasMore, sethasMore] = useState(true);
  const [page, setpage] = useState(2);

  useEffect(() => {
    const getPhotos = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_page=1&_limit=6"
      );
      setItems(data);
    };
    getPhotos();
  }, []);

  const fetchPhotos = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=6`
    );
    return data;
  };

  const fetchData = async () => {
    const photosFormServer = await fetchPhotos();

    setItems([...items, ...photosFormServer]);
    if (photosFormServer.length === 0 || photosFormServer.length < 6) {
      sethasMore(false);
    }
    setpage(page + 1);
  };
  return (
    <Fragment>
      <div className="container my-5">
        <InfiniteScroll
          dataLength={items.length} //This is important field to render the next data
          next={fetchData}
          hasMore={hasMore}
          loader={<Loader />}
          endMessage={<EndMsg />}
        >
          <div className="row">
            {items.map((item, key) => {
              //   return <PhotoCard item={item} key={key} />;
              return <PostCard item={item} key={key} />;
            })}
          </div>
        </InfiniteScroll>
      </div>
    </Fragment>
  );
}
