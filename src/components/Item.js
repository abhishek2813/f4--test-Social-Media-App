// importing thing
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../state/actions";
import { useParams, Link } from "react-router-dom";

// create Item function here
const Item = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts(id)); // calling fetch function by useefect
  }, [dispatch, id]);

  const post = useSelector((state) =>
    state.posts.posts.find((post) => post.id === parseInt(id))
  );

  if (!post) {
    return (
      <div className="container">
        <div className="row">
          <div className="loader"></div>
        </div>
        <h3>No result Found</h3>
      </div>
    )
  }
  return (
    <div className="container text-dark">
      <div className="row my-3">
        <Link className="text-center text-decoration-none" to={`/`}>
          <button className="btn btn-dark my-3">Home</button>
        </Link>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <h5 className="card-header">Details Page for Post With Id :- {post.id}</h5>
            <img
              className="img-rounded zoom"
              src={`https://picsum.photos/200?random=${post.id}`}
              alt={post.title}
            />
            <div className="card-body">
              <h5 className="card-title text-center">Title:{post.title}</h5>
              <p className="card-text text-muted"><b>Details :-</b>{post.body}</p>
              <ul className="list-group">
                <li className="list-group-item">Created by User ID: {post.userId}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
