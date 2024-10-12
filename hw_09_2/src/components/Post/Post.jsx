import React from 'react';
import { useNavigate } from "react-router-dom";
import getFormattedDate from '../utility/getFormattedDate';
import PropTypes from 'prop-types';

export default function Post({ post }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/posts/${post.id}`);
    }

    return (
        <div className="post" onClick={handleClick}>
            <div className="post__date">Дата создания: {getFormattedDate(post.created)}</div>
            <div className="post__content">{post.content}</div>
        </div>
    );
}

Post.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number,
        created: PropTypes.number,
        content: PropTypes.string,
    })
};