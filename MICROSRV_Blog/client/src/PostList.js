import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

export default () => {
    const [posts, setPosts] = useState({});

    const fetchPosts = async () => {
        const res = await axios.get('http://posts.com/posts');
        console.log("Call to Posts(4000) removed!")
        setPosts(res.data);
    }

    // Use to make sure it is loaded only once
    useEffect(() => {
        fetchPosts();
    }, [])

    // Render each post from the object posts
    const renderedPosts = Object.values(posts).map(post => {
        return (
            <div
                className="card"
                style={{ width: '30%', marginBottom: '20px' }}
                key={post.id}
            >
                <div className="card-body">
                    <h3>{post.title}</h3>
                    <CommentList comments={post.comments} />
                    <CommentCreate postId={post.id} />
                </div>
            </div>
        );
    });

    //Render all the posts
    return (
        <div className="d-flex flex-row flex-wrap justify-content-between">
            {renderedPosts}
        </div>
    );
}