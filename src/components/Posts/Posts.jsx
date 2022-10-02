import React from "react";
import "./Posts.css";
import Post from "../Post/Post";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTimelinePosts } from "../../actions/postAction";
import { useParams } from "react-router-dom";

const Posts = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { user } = useSelector((state) => state.authreducer.authData);
  let { posts, loading } = useSelector((state) => state.postReducer);

  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  }, []);

  if (!posts) return "no Posts";
  if (params.id) posts = posts.filter((post) => post.userId === params.id);
  return (
    <div className="Posts">
      {/* {data.map((data) => {
        return <Post key={index} data={data} />;
      })} */}
      {loading
        ? "Fetching Posts..."
        : posts.map((post, id, index) => {
            return <Post key={index} data={post} id={id} />;
          })}
    </div>
  );
};

export default Posts;
