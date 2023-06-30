import React, { useEffect, useState } from 'react';

function Blogs() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch articles from the API
    fetch('https://api.example.com/articles')
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Blog/Articles</h1>
      {articles.map((article) => (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Blogs;
