import Header from '../navComponents/Header'
import Footer from '../MainContent/Footer'
import { useState } from 'react'
import BlogList from './BlogList'
import "../MainContent/HeroPage"
import BlogHero from './BlogHero'
import './Blog.css'
const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3; // Adjust based on total blog posts

  return (
    <div className='Blog'>
      <Header />
      <BlogHero />
      <div className="Text">
        <h2>Latest News <span className='highLight'>& Blog</span></h2>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      </div>
      <BlogList />
      <Footer />
    </div>
  );
}


export default Blog
