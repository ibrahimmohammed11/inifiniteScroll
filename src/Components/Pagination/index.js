import axios from "axios";
import React, { useEffect, useState, Fragment } from "react";
import ReactPaginate from "react-paginate";
import PostCard from "../InifinteScrolling/components/PostCard";

export default function Pagination() {
  const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const postsPerPage = 10;
  const pagesVisited = pageNumber * postsPerPage;

  useEffect(() => {
    const getPosts = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(data);
    };
    getPosts();
  }, []);
  const displayPosts = posts
    .slice(pagesVisited, pagesVisited + postsPerPage)
    .map((user, key) => {
      return <PostCard item={user} key={key} />;
    });

  const pageCount = Math.ceil(posts.length / postsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Fragment>
      <div className="container my-5">
        <div className="row">{displayPosts}</div>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </Fragment>
  );
}
