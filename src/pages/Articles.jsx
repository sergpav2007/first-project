import React from 'react';
import ListOfPosts from '../components/ListOfPosts';
import Posts from '../components/Posts';

const Articles = () => {
    const post = ListOfPosts();
    return (
        <div className="container text-center">
            <div className="row row-cols-3">
                {post.map(({ id, title, imageUrl }) => { return <Posts id={id} title={title} imageUrl={imageUrl} key={id} /> })}
            </div>
        </div>
    )
};

export default Articles;