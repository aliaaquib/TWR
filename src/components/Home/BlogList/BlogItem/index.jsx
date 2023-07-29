import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '../../../common/Chip';
import './style.css';

const BlogItem = ({
  blog: {
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    cover,
    category,
    id,
    redirectionUrl,
  },
}) => {
  return (
    <a href={redirectionUrl} target='_blank' rel="noreferrer" style={{textDecoration:"none", color:"black"}}>
    <div className='blogItem-wrap'>
      <img className='blogItem-cover' src={cover} alt='cover' />
      <Chip label={category} />
      <h3>{title}</h3>
      <p className='blogItem-desc'>{description}</p>
      <footer>
        <div className='blogItem-author'>
          <img src={authorAvatar} alt='avatar' />
          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>
        <Link className='blogItem-link' to={`/blog:${id}`}>
          {/* ➝ */}
        </Link>
      </footer>
    </div></a>
  );
};

export default BlogItem;
