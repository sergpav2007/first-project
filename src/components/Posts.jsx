import React from "react";
import { NavLink } from "react-router-dom";

const Posts = ({ id, title, imageUrl }) => {
    return (
        <div className="col card app-card" id="posts-card">
            <NavLink to={`/articles/${id}`} className="card-link">
                <div className="card-body">
                    <img className="card-img-top" id="posts-img" src={imageUrl} alt="" />
                    <p className="card-text" id="posts-text">{title}</p>
                </div>
            </NavLink>
        </div>
)}

export default Posts;