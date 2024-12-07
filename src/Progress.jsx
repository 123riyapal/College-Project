import React, { useEffect } from 'react';
import "./progress.css";

function Progress() {
  useEffect(() => {
    const calcScrollValue = () => {
      const scrollProgress = document.getElementById("progress");
      const pos = document.documentElement.scrollTop;
      const calcHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollValue = Math.round((pos * 100) / calcHeight);

      // Display the progress bar only when scrolling past 100px
      if (pos > 100) {
        scrollProgress.style.display = "grid";
      } else {
        scrollProgress.style.display = "none";
      }

      // Update the conic gradient based on the scroll value
      scrollProgress.style.background = `conic-gradient(#fda13b ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
    };

    window.addEventListener('scroll', calcScrollValue);
    window.addEventListener('load', calcScrollValue);

    // Scroll to top on click
    const scrollProgress = document.getElementById("progress");
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('scroll', calcScrollValue);
      window.removeEventListener('load', calcScrollValue);
      scrollProgress.removeEventListener("click", () => {
        document.documentElement.scrollTop = 0;
      });
    };
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div id='progress' className="progress">
      <span id='progress-value'> &#x1F815;</span>
    </div>
  );
}

export default Progress;
