import React from "react";
import ListOfPosts from "../components/ListOfPosts";
import { useParams } from "react-router-dom";

const Card = () => {
    const { id } = useParams();
    const post = ListOfPosts();
    for (let elem of post) {
        if (elem.id === parseInt(id, 10)) { return (
            <div className="card app-card" id="post-card">
                <div className="card-body" id="post-body">
                    <h5 className="card-title" id="post-title">{elem.title}</h5>
                    <img className="card-img-top" id="post-img" src={elem.imageUrl} alt="" />
                    <p className="card-text" id="post-desc">{elem.description}</p>
                    <div className="comment-body">
                        <h3>Experts Comment</h3>
                        <p className="card-text" id="post-comment">{elem.expertComment}</p>
                    </div>
                    
                </div>
            </div>
        )}
    }
};

export default Card;