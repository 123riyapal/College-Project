// src/components/BlogCard.js
import React from "react";
import "./BlogCard.css";

const BlogCard = ({ title, author, date, comments, image }) => {
  return (
    <div className="blog-card">
      <img src={image} alt="Blog" className="blog-card-image" />
      <div className="blog-card-content">
        <p className="blog-card-author">
          By {author} | <span>{comments} Comments</span>
        </p>
        <h3 className="blog-card-title">{title}</h3>
        <button className="blog-card-button">Read More</button>
      </div>
      <div className="blog-card-date">{date}</div>
    </div>
  );
};

export default BlogCard;
