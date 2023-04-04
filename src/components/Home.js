//Importing things in Home Componets
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../state/actions";
import { Link } from "react-router-dom";

//creating Home function
const Home = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const posts = useSelector((state) => state.posts.posts);

  return (
    <div className="container">
      <div className="row">
        {posts && posts.map((post) => (
          <div className="col-md-3 my-3 zoom" key={post.id}>
            <div className="card mb-4 shadow-sm">
              <Link className="text-dark text-decoration-none" to={`/item/${post.id}`}>
                <img
                  className="card-img-top"
                  src={`https://picsum.photos/200?random=${post.id}`}
                  alt=""
                />
                <div className="card-body">
                  <h4 className="card-title text-center text-danger">UserID : {post.id}</h4>
                  <h5 className="card-title">Title :- {post.title.slice(0, 30)}...</h5>
                  <p className="card-text text-muted">Body :- {post.body.slice(0, 50)}<span className="text-primary"> Read More...</span></p>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;