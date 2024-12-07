// src/components/BlogList.js
import React from "react";
import BlogCard from "./BlogCard";
import "./BlogList.css";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const blogData = [
  {
    title: "There Are Many Variations Passage Have Suffered Available",
    author: "Alicia Davis",
    date: "June 18, 2024",
    comments: 3,
    image: "https://plus.unsplash.com/premium_photo-1663054815371-9aaf7004d9b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHVuaXZlcnNpdHklMjBzdHVkZW50c3xlbnwwfHwwfHx8MA%3D%3D/300x180", // Replace with actual image URL
  },
  {
    title: "Understanding the Importance of Higher Education",
    author: "John Smith",
    date: "June 20, 2024",
    comments: 5,
    image: "https://images.unsplash.com/photo-1638848488954-83de1a25b95c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVuaXZlcnNpdHklMjBzdHVkZW50c3xlbnwwfHwwfHx8MA%3D%3D/300x180", // Replace with actual image URL
  },
  {
    title: "How Technology is Transforming Education",
    author: "Emma Johnson",
    date: "July 1, 2024",
    comments: 2,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dW5pdmVyc2l0eSUyMHN0dWRlbnRzJTIwdXNlJTIwVGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D/300x180", // Replace with actual image URL
  },
  {
    title: "Exploring Career Opportunities in Engineering",
    author: "Michael Brown",
    date: "July 5, 2024",
    comments: 8,
    image: "https://plus.unsplash.com/premium_photo-1658506891404-bfb50c7415f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dW5pdmVyc2l0eSUyMHN0dWRlbnRzfGVufDB8fDB8fHww/300x180", // Replace with actual image URL
  },
  {
    title: "Tips for Students to Excel in Academics",
    author: "Emily Wilson",
    date: "July 10, 2024",
    comments: 6,
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHN0dWRlbnRzfGVufDB8fDB8fHww/300x180", // Replace with actual image URL
  },
  {
    title: "The Benefits of Online Learning in 2024",
    author: "Olivia Miller",
    date: "July 15, 2024",
    comments: 4,
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/300x180", // Replace with actual image URL
  }
];


const BlogList = () => {
  useGSAP(() => {
    gsap.from(".blog-card", {
      opacity: 0,
      y: 50,
      duration:1,
      ease: "power2.out",
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".blog-card",
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
    });
  }, []);


  return (
    <div className="blog-list">
      {blogData.map((blog, index) => (
        <BlogCard
          key={index}
          title={blog.title}
          author={blog.author}
          date={blog.date}
          comments={blog.comments}
          image={blog.image}
        />
      ))}
    </div>
  );
};

export default BlogList;
